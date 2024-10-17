initialize_repository() {

  if [ ! -d ".git" ]; then
    read -p "Enter the name of the remote repository (e.g., https://github.com/user/repo.git): " repoName
    git init
    git remote add origin "$repoName"
  fi
}

commit_and_push() {
  read -p "Enter your commit message: " commitMessage

  git add .
  git commit -m "$commitMessage"
  git push origin master
}

if [ ! -d ".git" ]; then
  echo "This directory is not a Git repository."
  read -p "Do you want to initialize it as a Git repository? (y/n): " response
  if ["$response" == "y" ]|| ["$response" == "Y" ]; then
    initialize_repository
  else
    echo "Exiting script."
    exit 1
  fi
fi

commit_and_push

if [ $? -eq 0 ]; then
  echo "Changes have been successfully pushed to the repository."
else
  echo "An error occurred during the push. Check your authentication or repository status."
fi
