#!/usr/bin/env bash

DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
ROOT=$DIR/../
cd $ROOT

casperjs download-receipts.js --config=<(echo '{"sslProtocol": "any"}')