## Kubernetes Terms

### Cluster Components

- **Node**: A worker machine in Kubernetes, where containers are deployed.
- **Pod**: The smallest Kubernetes object, representing one or more containers deployed together on a node.

- **Service**:

  - **ClusterIP Service**: Exposes pods internally in the cluster using an internal IP.
  - **NodePort Service**: Exposes pods externally via a static port on each node.
  - **LoadBalancer Service**: Exposes pods externally using a cloud provider's load balancer.
  - **Headless Service**: A service with no cluster IP, used for stateful sets.
  - **Multiport Service**: Exposes multiple ports on the same set of pods.

- **Ingress**: Manages external access to services in a cluster, typically HTTP.

- **ConfigMap and Secret**: Kubernetes objects for storing configuration data and sensitive information securely.

### Data Storage

- **Volumes**: Attach storage to containers in a pod.

- **Persistent Volume (PV)**: Storage provisioned by an administrator in the cluster.

- **Persistent Volume Claim (PVC)**: Request for storage by a user or pod.

- **Storage Class**: Defines different classes of storage and their provisioners.

### Deployments and State Management

- **Deployment**: Manages a replicated application in Kubernetes.

- **StatefulSet**: Manages stateful applications and ensures ordering and uniqueness of pods.

- **Replica**: A copy of a pod to ensure high availability and scaling.

### Nodes and Control Plane

- **Worker Node**: Runs application containers in the Kubernetes cluster.

- **Master Node**: Manages the cluster and its components.

- **kubelet**: Agent on each node ensuring containers are running in a pod.

- **kube-proxy**: Maintains network rules on nodes and enables communication between Kubernetes services.

- **Container Runtime**: Software responsible for running containers.

- **API Server, Scheduler, Controller Manager**: Core components of the Kubernetes control plane.

- **etcd**: Distributed key-value store storing cluster data.

### Other Concepts

- **Namespace**: Virtual cluster within a Kubernetes cluster providing scope for names.

- **Ingress Controller**: Manages ingress traffic and routes it to services in the cluster.

- **Helm**: Package manager for Kubernetes, used to define, install, and upgrade Kubernetes applications.

### Notes

- **Data Persistence**: Kubernetes does not manage data persistence by default; external storage or persistent volumes are used.
- **Stateful Applications**: Managed using StatefulSets for stable, persistent storage and predictable network identities.
- **Database Deployments**: StatefulSets are recommended for databases due to their need for stable storage and network identity.

For YAML validation, use tools like [YAML Lint](http://www.yamllint.com/) to ensure syntax correctness in Kubernetes manifests.
