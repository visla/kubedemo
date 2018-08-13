docker stop minikube-simpleapi
docker rm minikube-simpleapi
docker run ^
	--network minikube ^
	--name minikube-simpleapi ^
	-v %cd%:/app/ ^
	--log-opt max-size="30m" ^
    --log-opt max-file=3 ^
    -p 8081:80 ^
	-d ^
	-w /app ^
	node:8 node /app/index.js