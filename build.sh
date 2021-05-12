PROJECT=$(pwd)
FRONTEND="$(pwd)"/packages/frontend
BACKEND="$(pwd)"/packages/backend
rm -rf "$PROJECT"/build
mkdir "$PROJECT"/build
mkdir "$PROJECT"/build/public
cd "$FRONTEND"
yarn build
mv "$FRONTEND"/build/* "$PROJECT"/build/public
cd "$BACKEND"
yarn build
mv "$BACKEND"/build/* "$PROJECT"/build
