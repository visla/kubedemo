docker stop minikube-coreapi
docker rm minikube-coreapi
docker run ^
	--name minikube-coreapi ^
	-p 8181:80 ^
	-d ^
	minikube-coreapi