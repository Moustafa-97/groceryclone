#!/bin/bash
echo "Fetching latest changes from origin Yllaaa..."
git fetch origin
git pull origin main

echo "Pushing changes to deploy test..."
git push deploy main --force

echo "Sync complete!"
