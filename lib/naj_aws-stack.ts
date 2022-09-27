import {Aws, App, RemovalPolicy, Stack, StackProps} from '@aws-cdk/core';
import * as s3 from '@aws-cdk/aws-s3';
import * as s3deployment from '@aws-cdk/aws-s3-deployment';
import * as route53 from '@aws-cdk/aws-route53';
import * as certificatemgr from '@aws-cdk/aws-certificatemanager';
import * as cloudfront from '@aws-cdk/aws-cloudfront';
import {CanonicalUserPrincipal, PolicyStatement} from "@aws-cdk/aws-iam";
import * as cloudwatch from "@aws-cdk/aws-cloudwatch";
import * as targets from "@aws-cdk/aws-route53-targets";

// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class NajAwsStack extends Stack {
    constructor(scope: App, id: string, props?: StackProps) {
        super(scope, id, props);

        const user = "najeb";
        const org = "redtail";
        const domainName = "najebjohnson.com";
        const subDomainName = "jira";

        const bucket = new s3.Bucket(this, `${user}-${org}-s3bucket`, {
            removalPolicy: RemovalPolicy.DESTROY,
            autoDeleteObjects: true,
            bucketName: `${user}-${org}-bucket`,
            publicReadAccess: true,
            websiteIndexDocument: "index.html"
        })

        // Deployment
        new s3deployment.BucketDeployment(this, `${user}-${org}-deployment`, {
            sources: [s3deployment.Source.asset("./my-react-app/build/")],
            destinationBucket: bucket
        })


        // Hosted Zone needs domain name
        const coachingZone = route53.HostedZone.fromLookup(this, `${user}-${org}-zone`, {
            domainName: domainName,
        })
        // Certificate manager
        const certificateArn = new certificatemgr.DnsValidatedCertificate(this, `${user}-${org}-arn`, {
            domainName: domainName,
            hostedZone: coachingZone,
            region: "us-east-1"
        }).certificateArn

        const identity = new cloudfront.OriginAccessIdentity(this, `${user}-${org}-identity`);

        bucket.addToResourcePolicy(new PolicyStatement({
            actions: ["S3:GetObject"],
            resources: [bucket.arnForObjects("*")],
            principals: [new CanonicalUserPrincipal(identity.cloudFrontOriginAccessIdentityS3CanonicalUserId)]
        }))

        const viewcert = cloudfront.ViewerCertificate.fromAcmCertificate({
            certificateArn,
            env: {
                region: Aws.REGION,
                account: Aws.ACCOUNT_ID,
            }, node: this.node,
            stack: this,
            applyRemovalPolicy(policy: RemovalPolicy): void {},
            metricDaysToExpiry: () => {
              return new cloudwatch.Metric({
                namespace: "cdk",
                metricName: "cdk",
              })
            }
        }, {
            sslMethod: cloudfront.SSLMethod.SNI,
            securityPolicy: cloudfront.SecurityPolicyProtocol.TLS_V1_2_2021,
            aliases: [domainName]
        })
        const distribution = new cloudfront.CloudFrontWebDistribution(this, `${user}-${org}-distribution`, {
            originConfigs: [{
                customOriginSource: {
                  domainName: domainName,
                },
                behaviors: [
                    {
                        viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
                        allowedMethods: cloudfront.CloudFrontAllowedMethods.GET_HEAD,
                        compress: true,
                        isDefaultBehavior: true,
                    }
                ]
            }],
            viewerCertificate: viewcert,
            defaultRootObject: "index.html",
            errorConfigurations: [
                {
                    errorCode: 403,
                    responseCode: 200,
                    responsePagePath: "/index.html"
                }
            ]

        })

        new route53.ARecord(this, `${user}-${org}-arecord`, {
            recordName: domainName,
            zone: coachingZone,
            target: route53.RecordTarget.fromAlias(new targets.CloudFrontTarget(distribution))
        })


    }
}
