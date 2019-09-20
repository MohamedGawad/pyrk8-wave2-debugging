echo "==== Create 01"
oc create -f 01_pass_house_all.yaml
echo "==== Create 02"
oc create -f 02_pass_avail_all.yaml
echo "==== Create 03"        
oc create -f 03_pass_baker_all.yaml
echo "==== Create 04"        
oc create -f 04_pass_carbon_all.yaml
echo "==== Create 05"        
oc create -f 05_pass_doors_all.yaml
echo "==== Create 06"        
oc create -f 06_pass_eagle_all.yaml
echo "==== Create 07"        
oc create -f 07_pass_floor_all.yaml
echo "==== Create 08"
oc create -f 08_pass_gonzo_all.yaml
echo "=============="
