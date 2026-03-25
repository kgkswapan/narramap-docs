#!/usr/bin/env bash
set -euo pipefail

if ! command -v docker >/dev/null 2>&1; then
  echo 'Docker is required to preview this exported docs site.' >&2
  exit 1
fi

PORT="${PORT:-4321}"
IMAGE="${DOCS_NODE_IMAGE:-node:22-slim}"
PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

echo "Starting local docs preview on http://localhost:${PORT}"
echo "Using Docker image: ${IMAGE}"

docker run --rm -it \
  -p "${PORT}:${PORT}" \
  -e HOME=/tmp/dochub-home \
  -e npm_config_cache=/tmp/npm-cache \
  -v "${PROJECT_DIR}:/src:ro" \
  "${IMAGE}" \
  bash -lc "rm -rf /tmp/dochub-site && mkdir -p /tmp/dochub-site && cp -R /src/. /tmp/dochub-site && cd /tmp/dochub-site && npm install && npm run build && npm run preview -- --host 0.0.0.0 --port ${PORT}"
