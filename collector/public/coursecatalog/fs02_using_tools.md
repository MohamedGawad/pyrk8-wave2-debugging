:course_title: FS02 - Using the tools

:course_desc: During this course the student will be required to use the OpenShift oc CLI.  <br><br>Tasks will describe a challenge.  The student must execute the appropriate command(s) to obtain the needed information.  <br><br>Once complete, review the Step-by-Step instructions and be sure to press the button to mark the task complete.  <br><br>If at any time you are needing assistance press the __Hint__ button.  If you are still needing assistance use the __Step-by-Step__ button to get detailed instructions for the task. <br><br>Press the 'Begin course' button to start the course.

:course_max: 25

:button1_label: Task
:button1_color: #e6f2ff'
:button1_size: 200

:button2_label: Hint
:button2_delay: 0
:button2_color: #e6ffe6
:button2_size: 100

:button3_label: Step-by-Step
:button3_delay: 0
:button3_color: #ffe6b3
:button3_size: 500

:infotab: <br><a href="https://github.com/IBM-ICP-CoC/fs-course/blob/master/Presentation.pptx"  target="_blank">Presentation - Powerpoint document </a>

:infotab: <br><a href="https://github.com/IBM-ICP-CoC/fs-course/blob/master/fs02_using_tools.pdf"  target="_blank">Course PDF</a>

:infotab: <hr>

:infotab: <br><br>Example debug flow:<img class="mx-auto d-block" src="../courseimages/debug-flow.png" height="450" width="1000">

:infotab: <br>cmd - command to run

:infotab: <br>container -container name (required if more than one container)

:infotab: <br>object - pods, service, statefulsets, deployment, etc.

:infotab: <br>pod - pod name

:infotab: <br>unit - unit running, e.g. kubelet, docker, etc.

----
----

:section_1: Task Login

### Getting comfortable with oc 

During this course the student will be required to use the OpenShift Container Platform oc CLI tool.  

The OpenShift Container Platform (OCP) CLI exposes commands for managing your applications, as well as lower level tools to interact with each component of your system.

Tasks will describe a challenge.  The student must execute the appropriate command(s) to obtain the needed information.  

Be sure to review the Step-by-Step instructions and press the green colored button labeled __"Press to mark completed"__ once a task has been completed.

If at any time you are needing assistance press the __Hint__ button.  If you are still needing assistance use the __Step-by-Step__ button to get detailed instructions for the task.

Use the __oc__ CLI authenticate to the OCP environment.
	
```
oc login https://<IP Address>:8443  -u <team> -p <team> --insecure-skip-tls-verify=false

<IP Address>  - replace with instructor provided information  
<team>        - replace with team name

```	

The instructor will provide the IP address needed to access the OCP cluster that will be used in this lab.  



:section_2: Hint Login

There is no hint necessary for this task.



:section_3: Step-by-Step Login

Using the OpenShift oc CLI login to the instructor provided environment.

|  Item | Action |
|----|----|
| &#60;IP Address&#62; | Replace with instructor provided information  |
| &#60;team&#62; | Replace with team name |



__oc login https://&#60;IP Address&#62;:8443  -u &#60;team&#62; -p &#60;team&#62; --insecure-skip-tls-verify=false__


Once the command has completed a message will be displayed.  The message will contain a count of projects available to the user.  _XXX__ will provide the number of projects available to the user. 


__Example output:__ 

	Login successful.
	
	You have access to XXX projects, the list has been suppressed. You can list all projects with 'oc projects'
	
	Using project <team>.
	

> ConfirmButton Login
	

---- 
:section_1: Task T01

What are the node names in the cluster?  Use the oc to get this information.  Additionally, use the -o wide parameter.  The -o is a small letter O.    



:section_2: Hint T01

Get nodes and include the "-o wide" parameter.



:section_3: Step-by-Step T01

Enter the following command to view the nodes in the cluster. 

```

Command:

	oc get nodes   <and>
	oc get nodes -o wide 
	
	
Example output:
	
	From: oc get nodes
	NAME                          STATUS    ROLES          AGE       VERSION
	sydney.52.117.155.20.nip.io   Ready     compute        3d        v1.11.0+d4cacc0
	sydney.52.117.155.26.nip.io   Ready     infra,master   3d        v1.11.0+d4cacc0
	sydney.52.117.155.27.nip.io   Ready     compute        3d        v1.11.0+d4cacc0
	sydney.52.117.155.29.nip.io   Ready     compute        3d        v1.11.0+d4cacc0
	
	From: oc get nodes -o wide
	NAME                          STATUS    ROLES          AGE       VERSION           INTERNAL-IP     EXTERNAL-IP   OS-IMAGE                KERNEL-VERSION               CONTAINER-RUNTIME
	sydney.52.117.155.20.nip.io   Ready     compute        3d        v1.11.0+d4cacc0   52.117.155.20   <none>        CentOS Linux 7 (Core)   3.10.0-957.27.2.el7.x86_64   docker://1.13.1
	sydney.52.117.155.26.nip.io   Ready     infra,master   3d        v1.11.0+d4cacc0   52.117.155.26   <none>        CentOS Linux 7 (Core)   3.10.0-957.27.2.el7.x86_64   docker://1.13.1
	sydney.52.117.155.27.nip.io   Ready     compute        3d        v1.11.0+d4cacc0   52.117.155.27   <none>        CentOS Linux 7 (Core)   3.10.0-957.27.2.el7.x86_64   docker://1.13.1
	sydney.52.117.155.29.nip.io   Ready     compute        3d        v1.11.0+d4cacc0   52.117.155.29   <none>        CentOS Linux 7 (Core)   3.10.0-957.27.2.el7.x86_64   docker://1.13.1

```


> ConfirmButton T01 complete



----

:section_1: Task T02   

What is the Allocatable cpu count for the master node?  The output from the __describe__ is indented to be read by a human being and does not support the -o parameter.


:section_2: Hint T02

Describe the master node using the name from previous results.



:section_3: Step-by-Step T02


```

Command:

	oc describe node <master node name>    
	

Example output: (View output section Allocatable, and find cpu)
	
	Name:               gfstst.169.62.225.197.nip.io
	Roles:              infra,master
	Labels:             beta.kubernetes.io/arch=amd64
	                    beta.kubernetes.io/os=linux
	                    kubernetes.io/hostname=gfstst.169.62.225.197.nip.io
	                    node-role.kubernetes.io/infra=true
	                    node-role.kubernetes.io/master=true
	Annotations:        node.openshift.io/md5sum=c90cb94827c8f3a55332c5801f709754
	                    volumes.kubernetes.io/controller-managed-attach-detach=true
	CreationTimestamp:  Thu, 29 Aug 2019 08:57:35 -0400
	Taints:             <none>
	Unschedulable:      false
	Conditions:
	  Type             Status  LastHeartbeatTime                 LastTransitionTime                Reason                       Message
	  ----             ------  -----------------                 ------------------                ------                       -------
	  OutOfDisk        False   Tue, 10 Sep 2019 21:46:37 -0400   Thu, 29 Aug 2019 08:57:35 -0400   KubeletHasSufficientDisk     kubelet has sufficient disk space available
	  MemoryPressure   False   Tue, 10 Sep 2019 21:46:37 -0400   Thu, 29 Aug 2019 08:57:35 -0400   KubeletHasSufficientMemory   kubelet has sufficient memory available
	  DiskPressure     False   Tue, 10 Sep 2019 21:46:37 -0400   Thu, 29 Aug 2019 08:57:35 -0400   KubeletHasNoDiskPressure     kubelet has no disk pressure
	  PIDPressure      False   Tue, 10 Sep 2019 21:46:37 -0400   Thu, 29 Aug 2019 08:57:35 -0400   KubeletHasSufficientPID      kubelet has sufficient PID available
	  Ready            True    Tue, 10 Sep 2019 21:46:37 -0400   Thu, 29 Aug 2019 09:01:36 -0400   KubeletReady                 kubelet is posting ready status
	Addresses:
	  InternalIP:  169.62.225.197
	  Hostname:    gfstst.169.62.225.197.nip.io
	Capacity:
	 cpu:            8
	 hugepages-1Gi:  0
	 hugepages-2Mi:  0
	 memory:         16261076Ki
	 pods:           250
	Allocatable:
	 cpu:            8              <<<<<<---- Value to be reviewed
	 hugepages-1Gi:  0
	 hugepages-2Mi:  0
	 memory:         16158676Ki
	 pods:           250
	System Info:
	 Machine ID:                 686738635e44481c83f05005ea080803
	 System UUID:                5F4CB06B-FD89-3AC3-9BC2-C9F054A57ECA
	 Boot ID:                    c1d0be9f-6d6e-46dc-9963-2143a81bd814
	 Kernel Version:             3.10.0-957.27.2.el7.x86_64
	 OS Image:                   CentOS Linux 7 (Core)
	 Operating System:           linux
	 Architecture:               amd64
	 Container Runtime Version:  docker://1.13.1
	 Kubelet Version:            v1.11.0+d4cacc0
	 Kube-Proxy Version:         v1.11.0+d4cacc0
	Non-terminated Pods:         (21 in total)
	  Namespace                  Name                                               CPU Requests  CPU Limits  Memory Requests  Memory Limits
	  ---------                  ----                                               ------------  ----------  ---------------  -------------
	  default                    docker-registry-1-hsgwc                            100m (1%)     0 (0%)      256Mi (1%)       0 (0%)
	  default                    registry-console-1-wc5lk                           0 (0%)        0 (0%)      0 (0%)           0 (0%)
	  default                    router-1-krxfd                                     100m (1%)     0 (0%)      256Mi (1%)       0 (0%)
	  kube-system                master-api-gfstst.169.62.225.197.nip.io            0 (0%)        0 (0%)      0 (0%)           0 (0%)
	  kube-system                master-controllers-gfstst.169.62.225.197.nip.io    0 (0%)        0 (0%)      0 (0%)           0 (0%)
	  kube-system                master-etcd-gfstst.169.62.225.197.nip.io           0 (0%)        0 (0%)      0 (0%)           0 (0%)
	  openshift-console          console-54658656b7-h87tz                           100m (1%)     100m (1%)   100Mi (0%)       100Mi (0%)
	  openshift-monitoring       alertmanager-main-0                                5m (0%)       5m (0%)     210Mi (1%)       10Mi (0%)
	  openshift-monitoring       alertmanager-main-1                                5m (0%)       5m (0%)     210Mi (1%)       10Mi (0%)
	  openshift-monitoring       alertmanager-main-2                                5m (0%)       5m (0%)     210Mi (1%)       10Mi (0%)
	  openshift-monitoring       cluster-monitoring-operator-66cfd97b6d-8qg7c       20m (0%)      20m (0%)    50Mi (0%)        50Mi (0%)
	  openshift-monitoring       grafana-6b9f85786f-h9fsp                           100m (1%)     200m (2%)   100Mi (0%)       200Mi (1%)
	  openshift-monitoring       kube-state-metrics-c4f86b5f8-7gpgk                 20m (0%)      40m (0%)    40Mi (0%)        80Mi (0%)
	  openshift-monitoring       node-exporter-5xwc9                                10m (0%)      20m (0%)    20Mi (0%)        40Mi (0%)
	  openshift-monitoring       prometheus-k8s-0                                   15m (0%)      15m (0%)    60Mi (0%)        60Mi (0%)
	  openshift-monitoring       prometheus-k8s-1                                   15m (0%)      15m (0%)    60Mi (0%)        60Mi (0%)
	  openshift-monitoring       prometheus-operator-6644b8cd54-6cfl9               0 (0%)        0 (0%)      0 (0%)           0 (0%)
	  openshift-node             sync-gqql7                                         0 (0%)        0 (0%)      0 (0%)           0 (0%)
	  openshift-sdn              ovs-gtvfc                                          100m (1%)     0 (0%)      300Mi (1%)       0 (0%)
	  openshift-sdn              sdn-fq2mf                                          100m (1%)     0 (0%)      200Mi (1%)       0 (0%)
	  openshift-web-console      webconsole-7fc8759f7b-brpgq                        100m (1%)     0 (0%)      100Mi (0%)       0 (0%)
	Allocated resources:
	  (Total limits may be over 100 percent, i.e., overcommitted.)
	  Resource  Requests      Limits
	  --------  --------      ------
	  cpu       795m (9%)     425m (5%)
	  memory    2172Mi (13%)  620Mi (3%)
	Events:     <none>


```	


> ConfirmButton T02 complete




----
:section_1: Task T03

Display the top CPU and Memory for all nodes.  

:section_2: Hint T03
Top is an option of the "oc adm" capability.  Use oc admin --help and review the section labeled "Maintenance".

:section_3: Step-by-Step T03	

```

Command:

	oc adm top nodes
	
	
Example output:
	
	NAME                          CPU(cores)   CPU%      MEMORY(bytes)   MEMORY%   
	sydney.52.117.155.20.nip.io   156m         1%        2599Mi          33%       
	sydney.52.117.155.26.nip.io   607m         7%        6431Mi          40%       
	sydney.52.117.155.27.nip.io   362m         4%        3766Mi          48%       
	sydney.52.117.155.29.nip.io   145m         1%        2420Mi          31%  
	

```


> ConfirmButton T03 complete




----
:section_1: Task T04

Display the top CPU and Memory for pods in all namespaces.  



:section_2: Hint T04

All namespaces can be viewed by using the --all-namespaces parameter for the oc CLI.



:section_3: Step-by-Step T04

```

Command:

	oc adm top pods --all-namespaces
	
		
Example output:

	NAMESPACE                           NAME                                             CPU(cores)   MEMORY(bytes)   
	app-storage                         glusterblock-storage-provisioner-dc-1-bdhb8      0m           11Mi            
	app-storage                         glusterfs-storage-2r7rt                          3m           159Mi           
	app-storage                         glusterfs-storage-bgj5h                          4m           147Mi           
	app-storage                         glusterfs-storage-k5v24                          2m           140Mi           
	app-storage                         heketi-storage-1-ph6bl                           0m           16Mi            
	default                             dashboard-7cc4b6645c-gpp6d                       0m           21Mi            
	default                             docker-registry-1-ccsbq                          1m           17Mi            
	default                             registry-console-1-x8t78                         0m           1Mi             
	default                             router-1-pfz6m                                   4m           40Mi            
	kube-service-catalog                apiserver-gs79m                                  4m           42Mi            
	kube-service-catalog                controller-manager-6dtd6                         14m          26Mi            
	kube-system                         master-api-sydney.52.117.155.26.nip.io           387m         887Mi           
	kube-system                         master-controllers-sydney.52.117.155.26.nip.io   95m          272Mi           
	kube-system                         master-etcd-sydney.52.117.155.26.nip.io          33m          529Mi           
	nfsprov                             nfs-client-provisioner-9576b7995-cf8x5           2m           10Mi            
	openshift-ansible-service-broker    asb-1-h7v4n                                      1m           24Mi            
	openshift-console                   console-56c6db78f4-z8f5q                         1m           7Mi             
	openshift-infra                     hawkular-cassandra-1-zq6qk                       250m         1336Mi          
	openshift-infra                     hawkular-metrics-qxq4q                           34m          668Mi           
	openshift-infra                     heapster-vdxq8                                   6m           40Mi            
	openshift-metrics-server            metrics-server-56cd9bfcf-tn2bv                   2m           33Mi            
	openshift-monitoring                alertmanager-main-0                              2m           27Mi            
	openshift-monitoring                alertmanager-main-1                              3m           26Mi            
	openshift-monitoring                alertmanager-main-2                              2m           26Mi            
	openshift-monitoring                cluster-monitoring-operator-66cfd97b6d-smqh7     0m           32Mi            
	openshift-monitoring                grafana-6b9f85786f-l8lk8                         4m           37Mi            
	openshift-monitoring                kube-state-metrics-c4f86b5f8-s9j8f               3m           62Mi            
	openshift-monitoring                node-exporter-d7h9j                              0m           23Mi            
	openshift-monitoring                node-exporter-lgjq9                              1m           24Mi            
	openshift-monitoring                node-exporter-nkmbr                              1m           19Mi            
	openshift-monitoring                node-exporter-sd55c                              1m           21Mi            
	openshift-monitoring                prometheus-k8s-0                                 64m          661Mi           
	openshift-monitoring                prometheus-k8s-1                                 61m          616Mi           
	openshift-monitoring                prometheus-operator-6644b8cd54-6f75q             0m           22Mi            
	openshift-node                      sync-7fq2d                                       0m           2Mi             
	openshift-node                      sync-j5fqs                                       0m           21Mi            
	openshift-node                      sync-nfvxs                                       0m           2Mi             
	openshift-node                      sync-sjnnn                                       0m           2Mi             
	openshift-sdn                       ovs-b84v2                                        11m          78Mi            
	openshift-sdn                       ovs-dcxc5                                        9m           79Mi            
	openshift-sdn                       ovs-xg4jb                                        13m          78Mi            
	openshift-sdn                       ovs-zl8tz                                        10m          78Mi            
	openshift-sdn                       sdn-22pts                                        7m           43Mi            
	openshift-sdn                       sdn-84n5k                                        9m           44Mi            
	openshift-sdn                       sdn-9zlkx                                        8m           46Mi            
	openshift-sdn                       sdn-nj4q5                                        7m           58Mi            
	openshift-template-service-broker   apiserver-bzxlb                                  5m           29Mi            
	openshift-web-console               webconsole-7fc8759f7b-dpcjm                      9m           15Mi            
	team01                              team01-student-ui-7f47864588-hz7gn               0m           18Mi            
	team02                              team02-student-ui-7fdc77b4df-l9k7t               0m           19Mi     
	
	. . . additional output removed . . .


```


> ConfirmButton T04 complete




----
:section_1: Task T05

What routes exist in all namespaces?



:section_2: Hint T05

Be sure to use the --all-namespaces parameter



:section_3: Step-by-Step T05	

```

Command:
	
	oc get routes --all-namespaces
	
	
Example output:
	
	NAMESPACE              NAME                HOST/PORT                                                             PATH      SERVICES            PORT      TERMINATION          WILDCARD
	app-storage            heketi-storage      heketi-storage-app-storage.gfstst.169.62.225.197.nip.io                         heketi-storage      <all>                          None
	default                docker-registry     docker-registry-default.gfstst.169.62.225.197.nip.io                            docker-registry     <all>     passthrough          None
	default                registry-console    registry-console-default.gfstst.169.62.225.197.nip.io                           registry-console    <all>     passthrough          None
	openshift-console      console             console.gfstst.169.62.225.197.nip.io                                            console             https     reencrypt/Redirect   None
	openshift-monitoring   alertmanager-main   alertmanager-main-openshift-monitoring.gfstst.169.62.225.197.nip.io             alertmanager-main   web       reencrypt            None
	openshift-monitoring   grafana             grafana-openshift-monitoring.gfstst.169.62.225.197.nip.io                       grafana             https     reencrypt            None
	openshift-monitoring   prometheus-k8s      prometheus-k8s-openshift-monitoring.gfstst.169.62.225.197.nip.io                prometheus-k8s      web       reencrypt            None


```	


> ConfirmButton T05 complete




----
:section_1: Task T06 
 
Get a list of projects, select one and describe the project.  For the selected project what is the default __sa.scc.uid-range__ that will be used.



:section_2: Hint T06
Use get and describe.



:section_3: Step-by-Step T06	

```

Command:

	oc get projects

	oc describe project <name of project>
	
Example output:


From: oc get projects
	
	NAME                                DISPLAY NAME   STATUS
	app-storage                                        Active
	default                                            Active
	kube-public                                        Active
	kube-service-catalog                               Active
	kube-system                                        Active
	management-infra                                   Active
	nfsprov                                            Active
	openshift                                          Active
	openshift-ansible-service-broker                   Active
	openshift-console                                  Active
	openshift-infra                                    Active
	openshift-logging                                  Active
	openshift-metrics-server                           Active
	openshift-monitoring                               Active
	openshift-node                                     Active
	openshift-sdn                                      Active
	openshift-template-service-broker                  Active
	openshift-web-console                              Active
	team01                                             Active
	team02                                             Active
	
	. . . additional output removed . . .


From: oc describe project default         (project name default selected)

	Name:			default
	Created:		3 days ago
	Labels:			<none>
	Annotations:		openshift.io/node-selector=
				openshift.io/sa.scc.mcs=s0:c1,c0
				openshift.io/sa.scc.supplemental-groups=1000000000/10000
				openshift.io/sa.scc.uid-range=1000000000/10000
	Display Name:		<none>
	Description:		<none>
	Status:			Active
	Node Selector:		<none>
	Quota:			<none>
	Resource limits:	<none>



```


> ConfirmButton T06 complete



----
:section_1: Task T07   

Using the oc adm policy capabilities determine who can get pod information.



:section_2: Hint T07   

Try __oc adm policy --help__ to get more information about how to obtain the information.




:section_3: Step-by-Step T07	

```

Command:

	oc adm policy who-can get pods


Example output:
	
	Namespace: default
	Verb:      get
	Resource:  pods
	
	Users:  admin
	        red
	        system:admin
	        system:kube-scheduler
	        system:serviceaccount:default:router
	        system:serviceaccount:kube-system:clusterrole-aggregation-controller
	        system:serviceaccount:kube-system:deployment-controller
	        system:serviceaccount:kube-system:endpoint-controller
	        system:serviceaccount:kube-system:generic-garbage-collector
	        system:serviceaccount:kube-system:namespace-controller
	        system:serviceaccount:kube-system:persistent-volume-binder
	        system:serviceaccount:kube-system:pvc-protection-controller
	        system:serviceaccount:kube-system:statefulset-controller
	        system:serviceaccount:management-infra:management-admin
	        system:serviceaccount:nfsprov:deployer
	        system:serviceaccount:openshift-infra:build-controller
	        system:serviceaccount:openshift-infra:default-rolebindings-controller
	        system:serviceaccount:openshift-infra:deployer-controller
	        system:serviceaccount:openshift-infra:pv-recycler-controller
	        system:serviceaccount:openshift-infra:sdn-controller
	        system:serviceaccount:openshift-infra:template-instance-controller
	        system:serviceaccount:openshift-infra:template-instance-finalizer-controller
	        system:serviceaccount:openshift-monitoring:cluster-monitoring-operator
	        system:serviceaccount:openshift-sdn:sdn
	        team01
	        team02
	        
	        . . . additional output removed . . .
	
	Groups: system:cluster-admins
	        system:cluster-readers
	        system:masters
	        

```


> ConfirmButton T07



----

:section_1: Task T08

View the oc session configuration.



:section_2: Hint T08

Review __oc config --help__ for more information.



:section_3: Step-by-Step T08	

```

Command:
	
	oc config view

	
Example output:
	
	apiVersion: v1
	clusters:
	- cluster:
	    certificate-authority-data: REDACTED
	    server: https://gfstst.169.62.225.197.nip.io:8443
	  name: gfstst-169-62-225-197-nip-io:8443
	contexts:
	- context:
	    cluster: gfstst-169-62-225-197-nip-io:8443
	    namespace: default
	    user: system:admin/gfstst-169-62-225-197-nip-io:8443
	  name: default/gfstst-169-62-225-197-nip-io:8443/system:admin
	- context:
	    cluster: gfstst-169-62-225-197-nip-io:8443
	    namespace: nfsprov
	    user: system:admin/gfstst-169-62-225-197-nip-io:8443
	  name: nfsprov/gfstst-169-62-225-197-nip-io:8443/system:admin
	- context:
	    cluster: gfstst-169-62-225-197-nip-io:8443
	    namespace: red
	    user: system:admin/gfstst-169-62-225-197-nip-io:8443
	  name: red/gfstst-169-62-225-197-nip-io:8443/system:admin
	current-context: red/gfstst-169-62-225-197-nip-io:8443/system:admin
	kind: Config
	preferences: {}
	users:
	- name: system:admin/gfstst-169-62-225-197-nip-io:8443
	  user:
	    client-certificate-data: REDACTED
	    client-key-data: REDACTED


```


> ConfirmButton T08



----

:section_1: Task T09

What are __all__ the resources in the default project?  



:section_2: Hint T09

Either switch to the default project or use the namespace parameter to get all information.



:section_3: Step-by-Step T09	

```

Command:
	Option 1:
	
	oc project default
	oc get all
	
	Option 2;
	
	oc get all -n default

	
Example output:
	
	NAME                           READY     STATUS    RESTARTS   AGE
	pod/dns-limited                1/1       Running   275        11d
	pod/docker-registry-1-hsgwc    1/1       Running   0          12d
	pod/registry-console-1-wc5lk   1/1       Running   0          12d
	pod/router-1-krxfd             1/1       Running   0          12d
	
	NAME                                       DESIRED   CURRENT   READY     AGE
	replicationcontroller/docker-registry-1    1         1         1         12d
	replicationcontroller/registry-console-1   1         1         1         12d
	replicationcontroller/router-1             1         1         1         12d
	
	NAME                       TYPE        CLUSTER-IP     EXTERNAL-IP   PORT(S)                   AGE
	service/docker-registry    ClusterIP   172.30.87.90   <none>        5000/TCP                  12d
	service/kubernetes         ClusterIP   172.30.0.1     <none>        443/TCP,53/UDP,53/TCP     12d
	service/registry-console   ClusterIP   172.30.49.26   <none>        9000/TCP                  12d
	service/router             ClusterIP   172.30.61.78   <none>        80/TCP,443/TCP,1936/TCP   12d
	
	NAME                                                  REVISION   DESIRED   CURRENT   TRIGGERED BY
	deploymentconfig.apps.openshift.io/docker-registry    1          1         1         config
	deploymentconfig.apps.openshift.io/registry-console   1          1         1         config
	deploymentconfig.apps.openshift.io/router             1          1         1         config
	
	NAME                                        HOST/PORT                                               PATH      SERVICES           PORT      TERMINATION   WILDCARD
	route.route.openshift.io/docker-registry    docker-registry-default.gfstst.169.62.225.197.nip.io              docker-registry    <all>     passthrough   None
	route.route.openshift.io/registry-console   registry-console-default.gfstst.169.62.225.197.nip.io             registry-console   <all>     passthrough   None



```


> ConfirmButton T09 



----
:section_1: Task T10

View the logs for the pod that starts with “webconsole” in the openshift-web-console namespace.  What IP and port are securely serving the console?



:section_2: Hint T10

Get the list of pods in the openshift-web-console namespace to determine the full pod name to view the logs.   

Review the options for the "Troubleshooting and Debugging Commands" section from __oc --help__.

Be sure to define the namespace.



:section_3: Step-by-Step T10
	
```

Command:

	oc logs webconsole-7fc8759f7b-dpcjm  -n openshift-web-console
	
	
Example output:

	W0913 21:33:08.411930       1 start.go:93] Warning: config.clusterInfo.loggingPublicURL: Invalid value: "": required to view aggregated container logs in the console, web console start will continue.
	I0913 21:33:08.998336       1 start.go:208] OpenShift Web Console Version: v3.11.0+ea42280
	I0913 21:33:08.998683       1 serve.go:89] Serving securely on 0.0.0.0:8443.  <<<--- view this line



```


> ConfirmButton T10


----

:section_1: Task T11

Switch to the project for your team.  RSH into the pod that starts with __&#60;team&#62;-student-ui-__   

Replace __&#60;team&#62;__ with your team name.



:section_2: Hint T11

Change to the project.

Start a shell session in a pod the pod.

View the oc --help section labeled "Troubleshooting and Debugging Commands"


:section_3: Step-by-Step T11	

```

Command:

	oc project team01
	
Example output: 
	
	Now using project "team01" on server "https://52.117.155.26:8443".


	
Command:	

	oc get po

Example output: 

	NAME                                 READY     STATUS    RESTARTS   AGE
	team01-student-ui-7f47864588-hz7gn   1/1       Running   0          1d


	
Command: 

	oc rsh team01-student-ui-7f47864588-hz7gn	
Example output:

	/collector	    
	
	
```


> ConfirmButton T11



----

:section_1: Task T12

Without using an interactive shell prompt, list the files in directory /collector/lib in the pod that starts with __&#60;team&#62;-student-ui-__   

Replace __&#60;team&#62;__ with your team name.



:section_2: Hint T12

The command syntax needs the __-it__ and __--__ followed by the command to list the files. 

ls -la /collector/lib will list the files.



:section_3: Step-by-Step T12

```

Command:

	oc exec team01-student-ui-7f47864588-hz7gn  -it -- ls -la /collector/lib

	(if not in the <team> project add the -n <team> parameter)

	
Example output:
	
	total 132
	drwxrwxrwx    1 appuser  appusers      4096 Sep 13 23:44 .
	drwxrwxrwx    1 root     root          4096 Sep 13 23:44 ..
	-rwxrwxrwx    1 appuser  appusers     20786 Aug 14 20:38 cllr.js
	-rwxrwxrwx    1 appuser  appusers      4671 Aug 14 20:38 config.js
	-rwxrwxrwx    1 appuser  appusers      8030 Aug 15 15:25 courses.js
	-rwxrwxrwx    1 appuser  appusers     10738 Aug 14 20:38 insight.js
	-rwxrwxrwx    1 appuser  appusers     23135 Sep 12 01:38 parseHtmlBuffer.js
	-rwxrwxrwx    1 appuser  appusers      4405 Aug 14 20:38 printCourse.js
	-rwxrwxrwx    1 appuser  appusers      5499 Aug 17 14:59 student.js
	-rwxrwxrwx    1 appuser  appusers      2879 Aug 14 20:38 utl.js
	-rwxrwxrwx    1 appuser  appusers     28027 Aug 14 20:38 validateBuffer.js

```


> ConfirmButton T12 



----

:section_1: Task T13

Within your team project run a pod named __&#60;team&#62;-busybox__ using the "busybox" image, open an interactive session, and never restart the pod. 

A single command can be used to accomplish all of the above.

Replace __&#60;team&#62;__ with your team name.


Once the interactive prompt opens run the following command:

cat /etc/resolv.conf

Exit the interactive session.

 

:section_2: Hint T13

Ensure to use the -it, --image, and --restart options



:section_3: Step-by-Step T13
	
```

Command:

	oc run -it team01-busybox --image=busybox --restart=Never

Example output:
	
	If you don't see a command prompt, try pressing enter.
	/ #
	


Command in the interactive session:

	cat /etc/resolv.conf
	
Example output:
	
	nameserver 10.171.184.210
	search team01.svc.cluster.local svc.cluster.local cluster.local
	options ndots:5
	

Command in the interactive session:

	exit
	
Example output:
	
	The command prompt from the terminal session will be shown.
	
	
```


> ConfirmButton T13



----

:section_1: Task T14

Using the pod created in the previous task edit the pod (named __&#60;team&#62;-busybox__) adding the following label in the metadata.labels section.

  work: training

Save the changes and then describe the pod to validate the label is defined.

When the pod is saved and you attempt to close the editor it will not close if the proper syntax is not used.


Now, add a second annotation by usin the oc patch and not edit.  Patch uses the -p parameter followed by the patch data.  The input for the patch would be JSON formatted.  This additional annotation should be:

	play: gaming


Example:

 '{"metadata":{"annotations":{"play":"gaming"}}}'
 

:section_2: Hint T14

The default editor "vi" will open when the command is executed.  If you desire to use the “nano” editor add the following parameter:


__KUBE_EDITOR="nano"__ oc edit po &#60;team&#62;-busybox



:section_3: Step-by-Step T14
	
```

Command:

	oc edit po team01-busybox

Example output:
	

	# Please edit the object below. Lines beginning with a '#' will be ignored,
	# and an empty file will abort the edit. If an error occurs while saving this file will be
	# reopened with the relevant failures.
	#
	apiVersion: v1
	kind: Pod
	metadata:
	  annotations:
	    openshift.io/scc: anyuid
	  creationTimestamp: 2019-09-17T21:57:03Z
	  labels:
	    run: team01-busybox         <<<--- insert new all after this line
	  name: team01-busybox
	  namespace: team01
	  resourceVersion: "962458"
	  selfLink: /api/v1/namespaces/team01/pods/team01-busybox
	  uid: 151c3f3f-d996-11e9-ab08-06c0ef66d8ff
	spec:
	
	. . . additional output removed . . .



Insert the following in the editor

	work: training
	
Save the modified pod definition file:
	


Command:

	oc describe po team01-busybox

Example output:
	
	Name:               team01-busybox
	Namespace:          team01
	Priority:           0
	PriorityClassName:  <none>
	Node:               sydney.52.117.155.29.nip.io/52.117.155.29
	Start Time:         Tue, 17 Sep 2019 16:57:03 -0500
	Labels:             run=team01-busybox
	                    work=training
	Annotations:        openshift.io/scc=anyuid
	Status:             Succeeded
	
	. . . additional output removed . . .


Command:

	oc patch po team01-student-ui-7f47864588-hz7gn -p '{"metadata":{"annotations":{"play":"gaming"}}}'
	
	
Example output:

	pod/team01-student-ui-7f47864588-hz7gn patched


Command:

	oc describe po team01-busybox

Example output:
	
	Name:               team01-busybox
	Namespace:          team01
	Priority:           0
	PriorityClassName:  <none>
	Node:               sydney.52.117.155.29.nip.io/52.117.155.29
	Start Time:         Tue, 17 Sep 2019 16:57:03 -0500
	Labels:             run=team01-busybox
	                    work=training
	                    play=gaming
	Annotations:        openshift.io/scc=anyuid
	Status:             Succeeded
	
	. . . additional output removed . . .	
	
```


> ConfirmButton T14


----

:section_1: Task T15

Delete the pod created a previous task named __&#60;team&#62;-busybox__.

 

:section_2: Hint T15

Ensure a pod is deleted.

Ensure to include the proper namespace or switch to the project where the pod was created.



:section_3: Step-by-Step T15
	
	
```

Command:

	oc delete po team01-busybox

Example output:

	pod "team01-busybox" deleted
	
	
```


> ConfirmButton T15


----

:section_1: Task T16

Get storage related resources Persistent Volumes and Storage Classes for the cluster and get Persistent Volumes Claims for all namespaces.

 

:section_2: Hint T16

Abbreivations can be used:

| Abbr | Resource | Namespaced |
| :---: | :--- | :---: |
| pv | Persistent Volumes | no |
| sc | StorageClass | no |
| pvc | Persistent Volumes Claims | yes |



:section_3: Step-by-Step T16
	
	
```

Command:

	oc get pv

Example output:

	NAME                                       CAPACITY   ACCESS MODES   RECLAIM POLICY   STATUS    CLAIM                STORAGECLASS          REASON    AGE
	pvc-b209ee09-d66e-11e9-ab08-06c0ef66d8ff   1Mi        RWX            Delete           Bound     nfsprov/test-claim   managed-nfs-storage             4d


	
Command:
	
	oc get sc

Example output:

	NAME                      PROVISIONER                AGE
	glusterfs-storage         kubernetes.io/glusterfs    4d
	glusterfs-storage-block   gluster.org/glusterblock   4d
	managed-nfs-storage       myokd/nfs                  4d



Command:
	
	oc get pvc --all-namespaces

Example output:

	NAMESPACE   NAME         STATUS    VOLUME                                     CAPACITY   ACCESS MODES   STORAGECLASS          AGE
	nfsprov     test-claim   Bound     pvc-b209ee09-d66e-11e9-ab08-06c0ef66d8ff   1Mi        RWX            managed-nfs-storage   4d		
	
	
```


> ConfirmButton T16


----


:section_1: Task T17

List all supported API resources on the server in the cluster.  Ensure the __-o wide__ parameter is included to provide the VERBS permitted for each resource.

 

:section_2: Hint T17

View the section labeled "Advanced Commands" output from oc --help command.



:section_3: Step-by-Step T17
	
	
```

Command:

	oc api-resources

	
Example output:

	NAME                                  SHORTNAMES     APIGROUP                       NAMESPACED   KIND                                 VERBS
	bindings                                                                            true         Binding                              [create]
	componentstatuses                     cs                                            false        ComponentStatus                      [get list]
	configmaps                            cm                                            true         ConfigMap                            [create delete deletecollection get list patch update watch]
	endpoints                             ep                                            true         Endpoints                            [create delete deletecollection get list patch update watch]
	events                                ev                                            true         Event                                [create delete deletecollection get list patch update watch]
	limitranges                           limits                                        true         LimitRange                           [create delete deletecollection get list patch update watch]
	namespaces                            ns                                            false        Namespace                            [create delete get list patch update watch]
	nodes                                 no                                            false        Node                                 [create delete deletecollection get list patch update watch]
	persistentvolumeclaims                pvc                                           true         PersistentVolumeClaim                [create delete deletecollection get list patch update watch]
	persistentvolumes                     pv                                            false        PersistentVolume                     [create delete deletecollection get list patch update watch]
	pods                                  po                                            true         Pod                                  [create delete deletecollection get list patch update watch]
	podtemplates                                                                        true         PodTemplate                          [create delete deletecollection get list patch update watch]
	replicationcontrollers                rc                                            true         ReplicationController                [create delete deletecollection get list patch update watch]
	resourcequotas                        quota                                         true         ResourceQuota                        [create delete deletecollection get list patch update watch]
	secrets                                                                             true         Secret                               [create delete deletecollection get list patch update watch]
	securitycontextconstraints            scc                                           false        SecurityContextConstraints           [create delete deletecollection get list patch update watch]
	serviceaccounts                       sa                                            true         ServiceAccount                       [create delete deletecollection get list patch update watch]
	services                              svc                                           true         Service                              [create delete get list patch update watch]
	mutatingwebhookconfigurations                        admissionregistration.k8s.io   false        MutatingWebhookConfiguration         [create delete deletecollection get list patch update watch]
	validatingwebhookconfigurations                      admissionregistration.k8s.io   false        ValidatingWebhookConfiguration       [create delete deletecollection get list patch update watch]
	customresourcedefinitions             crd,crds       apiextensions.k8s.io           false        CustomResourceDefinition             [create delete deletecollection get list patch update watch]
	apiservices                                          apiregistration.k8s.io         false        APIService                           [create delete deletecollection get list patch update watch]
	controllerrevisions                                  apps                           true         ControllerRevision                   [create delete deletecollection get list patch update watch]
	daemonsets                            ds             apps                           true         DaemonSet                            [create delete deletecollection get list patch update watch]
	deployments                           deploy         apps                           true         Deployment                           [create delete deletecollection get list patch update watch]
	replicasets                           rs             apps                           true         ReplicaSet                           [create delete deletecollection get list patch update watch]
	statefulsets                          sts            apps                           true         StatefulSet                          [create delete deletecollection get list patch update watch]
	deploymentconfigs                     dc             apps.openshift.io              true         DeploymentConfig                     [create delete deletecollection get list patch update watch]
	tokenreviews                                         authentication.k8s.io          false        TokenReview                          [create]
	localsubjectaccessreviews                            authorization.k8s.io           true         LocalSubjectAccessReview             [create]
	selfsubjectaccessreviews                             authorization.k8s.io           false        SelfSubjectAccessReview              [create]
	selfsubjectrulesreviews                              authorization.k8s.io           false        SelfSubjectRulesReview               [create]
	subjectaccessreviews                                 authorization.k8s.io           false        SubjectAccessReview                  [create]
	clusterrolebindings                                  authorization.openshift.io     false        ClusterRoleBinding                   [create delete get list patch update]
	clusterroles                                         authorization.openshift.io     false        ClusterRole                          [create delete get list patch update]
	localresourceaccessreviews                           authorization.openshift.io     true         LocalResourceAccessReview            [create]
	localsubjectaccessreviews                            authorization.openshift.io     true         LocalSubjectAccessReview             [create]
	resourceaccessreviews                                authorization.openshift.io     false        ResourceAccessReview                 [create]
	rolebindingrestrictions                              authorization.openshift.io     true         RoleBindingRestriction               [create delete deletecollection get list patch update watch]
	rolebindings                                         authorization.openshift.io     true         RoleBinding                          [create delete get list patch update]
	roles                                                authorization.openshift.io     true         Role                                 [create delete get list patch update]
	selfsubjectrulesreviews                              authorization.openshift.io     true         SelfSubjectRulesReview               [create]
	subjectaccessreviews                                 authorization.openshift.io     false        SubjectAccessReview                  [create]
	subjectrulesreviews                                  authorization.openshift.io     true         SubjectRulesReview                   [create]
	bundlebindings                                       automationbroker.io            true         BundleBinding                        [delete deletecollection get list patch create update watch]
	bundleinstances                                      automationbroker.io            true         BundleInstance                       [delete deletecollection get list patch create update watch]
	bundles                                              automationbroker.io            true         Bundle                               [delete deletecollection get list patch create update watch]
	horizontalpodautoscalers              hpa            autoscaling                    true         HorizontalPodAutoscaler              [create delete deletecollection get list patch update watch]
	cronjobs                              cj             batch                          true         CronJob                              [create delete deletecollection get list patch update watch]
	jobs                                                 batch                          true         Job                                  [create delete deletecollection get list patch update watch]
	buildconfigs                          bc             build.openshift.io             true         BuildConfig                          [create delete deletecollection get list patch update watch]
	builds                                               build.openshift.io             true         Build                                [create delete deletecollection get list patch update watch]
	certificatesigningrequests            csr            certificates.k8s.io            false        CertificateSigningRequest            [create delete deletecollection get list patch update watch]
	events                                ev             events.k8s.io                  true         Event                                [create delete deletecollection get list patch update watch]
	daemonsets                            ds             extensions                     true         DaemonSet                            [create delete deletecollection get list patch update watch]
	deployments                           deploy         extensions                     true         Deployment                           [create delete deletecollection get list patch update watch]
	ingresses                             ing            extensions                     true         Ingress                              [create delete deletecollection get list patch update watch]
	networkpolicies                       netpol         extensions                     true         NetworkPolicy                        [create delete deletecollection get list patch update watch]
	podsecuritypolicies                   psp            extensions                     false        PodSecurityPolicy                    [create delete deletecollection get list patch update watch]
	replicasets                           rs             extensions                     true         ReplicaSet                           [create delete deletecollection get list patch update watch]
	images                                               image.openshift.io             false        Image                                [create delete deletecollection get list patch update watch]
	imagesignatures                                      image.openshift.io             false        ImageSignature                       [create delete]
	imagestreamimages                     isimage        image.openshift.io             true         ImageStreamImage                     [get]
	imagestreamimports                                   image.openshift.io             true         ImageStreamImport                    [create]
	imagestreammappings                                  image.openshift.io             true         ImageStreamMapping                   [create]
	imagestreams                          is             image.openshift.io             true         ImageStream                          [create delete deletecollection get list patch update watch]
	imagestreamtags                       istag          image.openshift.io             true         ImageStreamTag                       [create delete get list patch update]
	nodes                                                metrics.k8s.io                 false        NodeMetrics                          [get list]
	pods                                                 metrics.k8s.io                 true         PodMetrics                           [get list]
	alertmanagers                                        monitoring.coreos.com          true         Alertmanager                         [delete deletecollection get list patch create update watch]
	prometheuses                                         monitoring.coreos.com          true         Prometheus                           [delete deletecollection get list patch create update watch]
	prometheusrules                                      monitoring.coreos.com          true         PrometheusRule                       [delete deletecollection get list patch create update watch]
	servicemonitors                                      monitoring.coreos.com          true         ServiceMonitor                       [delete deletecollection get list patch create update watch]
	clusternetworks                                      network.openshift.io           false        ClusterNetwork                       [create delete deletecollection get list patch update watch]
	egressnetworkpolicies                                network.openshift.io           true         EgressNetworkPolicy                  [create delete deletecollection get list patch update watch]
	hostsubnets                                          network.openshift.io           false        HostSubnet                           [create delete deletecollection get list patch update watch]
	netnamespaces                                        network.openshift.io           false        NetNamespace                         [create delete deletecollection get list patch update watch]
	networkpolicies                       netpol         networking.k8s.io              true         NetworkPolicy                        [create delete deletecollection get list patch update watch]
	oauthaccesstokens                                    oauth.openshift.io             false        OAuthAccessToken                     [create delete deletecollection get list patch update watch]
	oauthauthorizetokens                                 oauth.openshift.io             false        OAuthAuthorizeToken                  [create delete deletecollection get list patch update watch]
	oauthclientauthorizations                            oauth.openshift.io             false        OAuthClientAuthorization             [create delete deletecollection get list patch update watch]
	oauthclients                                         oauth.openshift.io             false        OAuthClient                          [create delete deletecollection get list patch update watch]
	poddisruptionbudgets                  pdb            policy                         true         PodDisruptionBudget                  [create delete deletecollection get list patch update watch]
	podsecuritypolicies                   psp            policy                         false        PodSecurityPolicy                    [create delete deletecollection get list patch update watch]
	projectrequests                                      project.openshift.io           false        ProjectRequest                       [create list]
	projects                                             project.openshift.io           false        Project                              [create delete get list patch update watch]
	appliedclusterresourcequotas                         quota.openshift.io             true         AppliedClusterResourceQuota          [get list]
	clusterresourcequotas                 clusterquota   quota.openshift.io             false        ClusterResourceQuota                 [create delete deletecollection get list patch update watch]
	clusterrolebindings                                  rbac.authorization.k8s.io      false        ClusterRoleBinding                   [create delete deletecollection get list patch update watch]
	clusterroles                                         rbac.authorization.k8s.io      false        ClusterRole                          [create delete deletecollection get list patch update watch]
	rolebindings                                         rbac.authorization.k8s.io      true         RoleBinding                          [create delete deletecollection get list patch update watch]
	roles                                                rbac.authorization.k8s.io      true         Role                                 [create delete deletecollection get list patch update watch]
	routes                                               route.openshift.io             true         Route                                [create delete deletecollection get list patch update watch]
	priorityclasses                       pc             scheduling.k8s.io              false        PriorityClass                        [create delete deletecollection get list patch update watch]
	podsecuritypolicyreviews                             security.openshift.io          true         PodSecurityPolicyReview              [create]
	podsecuritypolicyselfsubjectreviews                  security.openshift.io          true         PodSecurityPolicySelfSubjectReview   [create]
	podsecuritypolicysubjectreviews                      security.openshift.io          true         PodSecurityPolicySubjectReview       [create]
	rangeallocations                                     security.openshift.io          false        RangeAllocation                      [create delete deletecollection get list patch update watch]
	securitycontextconstraints            scc            security.openshift.io          false        SecurityContextConstraints           [create delete deletecollection get list patch update watch]
	clusterservicebrokers                                servicecatalog.k8s.io          false        ClusterServiceBroker                 [create delete deletecollection get list patch update watch]
	clusterserviceclasses                                servicecatalog.k8s.io          false        ClusterServiceClass                  [create delete deletecollection get list patch update watch]
	clusterserviceplans                                  servicecatalog.k8s.io          false        ClusterServicePlan                   [create delete deletecollection get list patch update watch]
	servicebindings                                      servicecatalog.k8s.io          true         ServiceBinding                       [create delete deletecollection get list patch update watch]
	servicebrokers                                       servicecatalog.k8s.io          true         ServiceBroker                        [create delete deletecollection get list patch update watch]
	serviceclasses                                       servicecatalog.k8s.io          true         ServiceClass                         [create delete deletecollection get list patch update watch]
	serviceinstances                                     servicecatalog.k8s.io          true         ServiceInstance                      [create delete deletecollection get list patch update watch]
	serviceplans                                         servicecatalog.k8s.io          true         ServicePlan                          [create delete deletecollection get list patch update watch]
	storageclasses                        sc             storage.k8s.io                 false        StorageClass                         [create delete deletecollection get list patch update watch]
	volumeattachments                                    storage.k8s.io                 false        VolumeAttachment                     [create delete deletecollection get list patch update watch]
	brokertemplateinstances                              template.openshift.io          false        BrokerTemplateInstance               [create delete deletecollection get list patch update watch]
	processedtemplates                                   template.openshift.io          true         Template                             [create]
	templateinstances                                    template.openshift.io          true         TemplateInstance                     [create delete deletecollection get list patch update watch]
	templates                                            template.openshift.io          true         Template                             [create delete deletecollection get list patch update watch]
	groups                                               user.openshift.io              false        Group                                [create delete deletecollection get list patch update watch]
	identities                                           user.openshift.io              false        Identity                             [create delete deletecollection get list patch update watch]
	useridentitymappings                                 user.openshift.io              false        UserIdentityMapping                  [create delete get patch update]
	users                                                user.openshift.io              false        User                                 [create delete deletecollection get list patch update watch]	
	
```


> ConfirmButton T17


----

:section_1: Task T18

Using the -v 9 parameter get the pods in your team namespace. The -v parameter will display detail communication sent to the cluster API server.

Did your output include any __curl__ commands?

 

:section_2: Hint T18

Ensure you are in the team project or include the -n <team> parameter.



:section_3: Step-by-Step T18
	
	
```

Command:

	oc get po -n team01 -v 9

Example output:

	I0917 19:28:48.023894   66924 loader.go:359] Config loaded from file /Users/daveweilert/.kube/config
	I0917 19:28:48.027878   66924 loader.go:359] Config loaded from file /Users/daveweilert/.kube/config
	I0917 19:28:48.034776   66924 loader.go:359] Config loaded from file /Users/daveweilert/.kube/config
	I0917 19:28:48.041968   66924 loader.go:359] Config loaded from file /Users/daveweilert/.kube/config
	I0917 19:28:48.042310   66924 round_trippers.go:386] curl -k -v -XGET  -H "Accept: application/json;as=Table;v=v1beta1;g=meta.k8s.io, application/json" -H "User-Agent: oc/v1.11.0+d4cacc0 (darwin/amd64) kubernetes/d4cacc0" -H "Authorization: Bearer fKqnT6ZLdI0PLYbyXGzjwUxWHr6H87cCwJUBwvq9Ktk" 'https://52.117.155.26:8443/api/v1/namespaces/team01/pods?limit=500'
	I0917 19:28:48.104043   66924 round_trippers.go:405] GET https://52.117.155.26:8443/api/v1/namespaces/team01/pods?limit=500 200 OK in 61 milliseconds
	I0917 19:28:48.104098   66924 round_trippers.go:411] Response Headers:
	I0917 19:28:48.104113   66924 round_trippers.go:414]     Date: Wed, 18 Sep 2019 00:28:48 GMT
	I0917 19:28:48.104122   66924 round_trippers.go:414]     Cache-Control: no-store
	I0917 19:28:48.104140   66924 round_trippers.go:414]     Content-Type: application/json
	I0917 19:28:48.104151   66924 round_trippers.go:414]     Content-Length: 3385
	I0917 19:28:48.104238   66924 request.go:897] Response Body: {"kind":"Table","apiVersion":"meta.k8s.io/v1beta1","metadata":{"selfLink":"/api/v1/namespaces/team01/pods","resourceVersion":"986995"},"columnDefinitions":[{"name":"Name","type":"string","format":"name","description":"Name must be unique within a namespace. Is required when creating resources, although some resources may allow a client to request the generation of an appropriate name automatically. Name is primarily intended for creation idempotence and configuration definition. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names","priority":0},{"name":"Ready","type":"string","format":"","description":"The aggregate readiness state of this pod for accepting traffic.","priority":0},{"name":"Status","type":"string","format":"","description":"The aggregate status of the containers in this pod.","priority":0},{"name":"Restarts","type":"integer","format":"","description":"The number of times the containers in this pod have been restarted.","priority":0},{"name":"Age","type":"string","format":"","description":"CreationTimestamp is a timestamp representing the server time when this object was created. It is not guaranteed to be set in happens-before order across separate operations. Clients may not set this value. It is represented in RFC3339 form and is in UTC.\n\nPopulated by the system. Read-only. Null for lists. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata","priority":0},{"name":"IP","type":"string","format":"","description":"IP address allocated to the pod. Routable at least within the cluster. Empty if not yet allocated.","priority":1},{"name":"Node","type":"string","format":"","description":"NodeName is a request to schedule this pod onto a specific node. If it is non-empty, the scheduler simply schedules this pod onto that node, assuming that it fits resource requirements.","priority":1},{"name":"Nominated Node","type":"string","format":"","description":"nominatedNodeName is set only when this pod preempts other pods on the node, but it cannot be scheduled right away as preemption victims receive their graceful termination periods. This field does not guarantee that the pod will be scheduled on this node. Scheduler may decide to place the pod elsewhere if other nodes become available sooner. Scheduler may also decide to give the resources on this node to a higher priority pod that is created after preemption. As a result, this field may be different than PodSpec.nodeName when the pod is scheduled.","priority":1}],"rows":[{"cells":["team01-student-ui-7f47864588-hz7gn","1/1","Running",0,"1d","10.130.0.223","sydney.52.117.155.27.nip.io","\u003cnone\u003e"],"object":{"kind":"PartialObjectMetadata","apiVersion":"meta.k8s.io/v1beta1","metadata":{"name":"team01-student-ui-7f47864588-hz7gn","generateName":"team01-student-ui-7f47864588-","namespace":"team01","selfLink":"/api/v1/namespaces/team01/pods/team01-student-ui-7f47864588-hz7gn","uid":"7cd9d5ac-d81c-11e9-ab08-06c0ef66d8ff","resourceVersion":"516858","creationTimestamp":"2019-09-16T00:54:07Z","labels":{"app":"team01-student-ui","pod-template-hash":"3903420144"},"annotations":{"openshift.io/scc":"restricted"},"ownerReferences":[{"apiVersion":"apps/v1","kind":"ReplicaSet","name":"team01-student-ui-7f47864588","uid":"7cd76843-d81c-11e9-ab08-06c0ef66d8ff","controller":true,"blockOwnerDeletion":true}]}}}]}
	I0917 19:28:48.105754   66924 get.go:443] no kind is registered for the type v1beta1.Table in scheme "k8s.io/kubernetes/pkg/api/legacyscheme/scheme.go:29"
	NAME                                 READY     STATUS    RESTARTS   AGE
	team01-student-ui-7f47864588-hz7gn   1/1       Running   0          1d

	
```


> ConfirmButton T18



----

:section_1: Task T18

The "oc get" command provides an ability to view realtime actions of the resource that is the focus of the get. Provide an additional parameter, __--watch__.

View realtime events for all namespaces in the cluster.  Be sure to include the __--watch__ parameter.

To stop realtime viewing escape or Control-C the terminal output to exit the command.
 

:section_2: Hint T18

Ensure to include the --all-namespaces and --watch parameters.



:section_3: Step-by-Step T18
	
	
```

Command:

	oc get events --all-namespaces --watch 
	
Example output:

	NAMESPACE              LAST SEEN   FIRST SEEN   COUNT     NAME                                        KIND                   SUBOBJECT                             TYPE      REASON           SOURCE                                 MESSAGE
	default                3m          4d           1185      ansible-service-broker.15c41d2da5b24ada     ClusterServiceBroker                                         Normal    FetchedCatalog   service-catalog-controller-manager     Successfully fetched catalog entries from broker.
	default                7m          4d           594       template-service-broker.15c41d2ce1a60932    ClusterServiceBroker                                         Normal    FetchedCatalog   service-catalog-controller-manager     Successfully fetched catalog entries from broker.
	kube-service-catalog   1h          7h           3         apiserver-gs79m.15c5485c2851f574            Pod                    spec.containers{apiserver}            Warning   Unhealthy        kubelet, sydney.52.117.155.26.nip.io   Readiness probe failed: HTTP probe failed with statuscode: 500
	kube-service-catalog   1h          7h           3         controller-manager-6dtd6.15c5485d06865607   Pod                    spec.containers{controller-manager}   Warning   Unhealthy        kubelet, sydney.52.117.155.26.nip.io   Readiness probe failed: HTTP probe failed with statuscode: 500		

	
```


> ConfirmButton T18


