#!/bin/bash
echo "Please enter your commit message: "
read commit_message
git add .
git commit -m "$commit_message"
git push