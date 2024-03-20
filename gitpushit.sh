# Function to perform the standard git operations
git_operations() {
    echo "Running standard git operations..."
    git add .
    git commit -m "$commit_message"
    git push
}

# Function for build and deploy
build_and_deploy() {
    echo "Running build..."
    npm run build && echo "Build successful."

    if [ $? -eq 0 ]; then
        echo "Deploying to Firebase..."
        firebase deploy && echo "Deploy successful."
    fi
}

# Check for '--deploy' argument
if [ "$1" == "--deploy" ]; then
    echo "Please enter your commit message: "
    read commit_message

    # Perform git operations, then build and deploy
    git_operations
    build_and_deploy
else
    # This block runs if no arguments are provided or if the argument is not '--deploy'
    if [ $# -eq 0 ]; then
        echo "No arguments provided. Running standard git operations only."
        echo "Please enter your commit message: "
        read commit_message
        git_operations
    else
        echo "Invalid argument. Use '--deploy' to run the full workflow or no arguments for standard git operations."
    fi
fi
