docker stop minikube-simpleapi
docker rm minikube-simpleapi
docker run ^
	--name minikube-simpleapi ^
	-p 8081:80 ^
	-d ^
	node:8 minikube-simpleapi