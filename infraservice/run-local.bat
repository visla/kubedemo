docker stop minikube-infraservice
docker rm minikube-infraservice
docker run ^
	--network minikube ^
	--name minikube-infraservice ^
	-v %cd%:/app/ ^
	--log-opt max-size="30m" ^
    --log-opt max-file=3 ^
    -p 8082:80 ^
	-d ^
	-w /app ^
	node:8 node /app/index.js