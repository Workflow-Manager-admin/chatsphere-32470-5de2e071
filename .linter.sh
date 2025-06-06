#!/bin/bash
cd /home/kavia/workspace/code-generation/chatsphere-32470-5de2e071/chat_sphere
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

