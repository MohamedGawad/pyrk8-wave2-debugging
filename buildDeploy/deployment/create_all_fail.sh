echo "==== Create 02"
kubectl create -f 02_fail_avail_one.yaml
echo "==== Create 03"        
kubectl create -f 03_fail_baker_one.yaml
echo "==== Create 04"        
kubectl create -f 04_fail_carbon_all.yaml
echo "==== Create 05"        
kubectl create -f 05_fail_doors_all.yaml
echo "==== Create 06"        
kubectl create -f 06_fail_eagle_all.yaml
echo "==== Create 07"        
kubectl create -f 07_fail_floor_all.yaml
echo "==== Create 08"
kubectl create -f 08_fail_gonzo_all.yaml
echo "=============="
