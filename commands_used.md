## Kubernetes Learning Commands

```markdown
minikube start
```

Starts Minikube using the Docker driver, initializing the Kubernetes cluster.

## Accessing Kubernetes Dashboard

```bash
minikube dashboard
```

Opens the Kubernetes dashboard in the default browser, enabling visualization and management of cluster resources.

## Checking Minikube Status

```bash
minikube status
```

Displays the status of the Minikube cluster, including control plane components and kubelet status.

## Stopping and Deleting Minikube

```bash
minikube delete
```

Deletes the Minikube cluster and its resources.

## Starting Minikube with a Specific Driver

```bash
minikube start --driver=docker
```

Starts Minikube using the Docker driver explicitly.

## Checking Kubernetes Version

```bash
kubectl version
```

Displays the client and server Kubernetes version information.

## Viewing Cluster Information

```bash
kubectl cluster-info
```

Shows details about the Kubernetes cluster, including API server and CoreDNS information.

## Getting Nodes, Pods, and Services

```bash
kubectl get nodes
kubectl get pod
kubectl get pod --watch
kubectl get pod -o wide
kubectl get service
kubectl get deployment
kubectl get namespaces
kubectl get all
kubectl get all | grep application name
```

Commands to retrieve information about nodes, pods, services, deployments, namespaces, and all resources in the cluster.

## Creating Deployments

```bash
kubectl create deployment my-nginx --image=nginx:latest
kubectl create deployment my-nginx --image=nginx:latest --dry-run=client -o yaml
kubectl create deployment my-nginx --image=nginx:latest --dry-run=server -o yaml
```

Creates a deployment named `my-nginx` using the Nginx image, with options for dry-run YAML generation.

## Managing Deployments

```bash
kubectl get replicaset
kubectl edit deployment my-nginx
kubectl delete deployment my-nginx
```

Commands to list replica sets, edit deployments, and delete deployments like `my-nginx`.

## Viewing Logs, Describing Pods, and Executing Commands

```bash
kubectl logs my-nginx-d6656797d-2g2hq
kubectl describe pods
kubectl describe pod my-nginx-d6656797d-2g2hq
kubectl exec -it my-nginx-d6656797d-2g2hq -- bin/bash
```

Commands to view logs, describe pod details, and execute commands within pods.

## Exposing Services

```bash
kubectl expose deployments my-nginx --port=80 --type=LoadBalancer
minikube service my-nginx
```

Creates a service for deployment `my-nginx` exposed externally via LoadBalancer type.

## Building and Pushing Docker Images

```bash
docker build -t abhisheksmandal/kube-test-app:01 .
docker push abhisheksmandal/kube-test-app:01
```

Builds a Docker image tagged as `abhisheksmandal/kube-test-app:01` and pushes it to a Docker registry.

## Managing Deployments with Updates

```bash
kubectl set image deployment kube-test-app kube-test-app=abhisheksmandal/kube-test-app:03
kubectl rollout status deployment kube-test-app
kubectl rollout undo deployment kube-test-app
```

Updates deployment images, checks rollout status, and rolls back deployments.

## Scaling and Self-Healing

```bash
kubectl scale deployment node-crash-app --replicas=3
kubectl delete deployment --all -n default
```

Scales deployments and deletes all deployments in the `default` namespace.

## Managing Resources with YAML Files

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-kube-test-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: kube-test-app-yaml
  template:
    metadata:
      labels:
        app: kube-test-app-yaml
    spec:
      containers:
        - name: kube-test-app-yaml
          image: abhisheksmandal/kube-test-app:02
```

Example YAML configuration for deploying `kube-test-app` with three replicas.

## Creating Namespaces and Applying YAML Configurations

```bash
kubectl create namespace my-namespace
kubectl apply -f deployment-node-app.yml --namespace=my-namespace
```

Creates a namespace `my-namespace` and applies a deployment YAML configuration within that namespace.

## Setting Default Namespace with Kubens

```bash
kubens my-namespace
```

Sets `my-namespace` as the default namespace for subsequent `kubectl` commands.

## Enabling Minikube Addons

```bash
minikube addons enable ingress
```

Enables the Ingress addon in Minikube to manage external access to services.

## Managing Ingress and DNS

```bash
kubectl apply -f food-order-ingress.yaml
```

Applies an Ingress configuration for routing external traffic to services in the cluster.

## Adding Entries to /etc/hosts

```
192.168.49.2    food-order.com
```

Maps `food-order.com` to Minikube's IP address for local testing purposes.

## Cleaning Up Deployments

```bash
kubectl delete -f deployment-node-app.yml
kubectl delete -f service-node-app.yml
```

Deletes deployments and associated services defined in YAML files.

## Creating and Managing Multi-Container Projects

```bash
kubectl apply -f nodedb-deployment.yml
kubectl apply -f nodedb-service.yml
kubectl apply -f mongo-db.yml
kubectl apply -f mongo-config.yml
kubectl apply -f node-app.yml
```

Commands for managing multi-container projects with Kubernetes deployments and services.

## Handling Volumes and Persistent Storage

```bash
kubectl apply -f host-pv.yml
kubectl apply -f host-pvc.yml
```

Applies YAML configurations for persistent volumes and volume claims in Kubernetes.

## Using HostPath Volumes

```
minikube ssh
sudo mkdir -p /mydata
```

Creates a directory on the Minikube node to be used as a HostPath volume in Kubernetes.
