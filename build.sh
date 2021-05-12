PROJECT=$(pwd)
FRONTEND="$(pwd)"/packages/frontend
FRONTEND_DESTINATION="$PROJECT"/build/frontend
BACKEND="$(pwd)"/packages/backend
BACKEND_DESTINATION="$PROJECT"/build/backend
rm -rf "$PROJECT"/build
mkdir "$PROJECT"/build
mkdir "$FRONTEND_DESTINATION"
mkdir "$BACKEND_DESTINATION"
cd "$FRONTEND"
yarn build
mv "$FRONTEND"/build/* "$FRONTEND_DESTINATION"
cd "$BACKEND"
yarn build
mv "$BACKEND"/build/* "$BACKEND_DESTINATION"
touch "$BACKEND_DESTINATION/.env"
echo "PORT=3000\nFRONTEND_DESTINATION=../frontend" >> "$BACKEND_DESTINATION/.env"
