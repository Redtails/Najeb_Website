#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import {Tags} from "@aws-cdk/core";
import { NajAwsStack } from '../lib/naj_aws-stack';

const app = new cdk.App();
const acct = "460023120802";
const mystack = new NajAwsStack(app, 'NajAwsStack', {
    env: {account: `${acct}`, region: 'us-east-1'},
});

Tags.of(mystack).add('cost', `${acct}-certificate`, {
    includeResourceTypes: ['AWS::CertificateManager::Certificate'],
})
Tags.of(mystack).add('cost', `${acct}-bucket`, {
    includeResourceTypes: ['AWS::S3::Bucket'],
})