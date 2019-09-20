echo "==== delete 01"
oc delete -f 01_pass_house_all.yaml
echo "==== delete 02"
oc delete -f 02_pass_avail_all.yaml
echo "==== delete 03"        
oc delete -f 03_pass_baker_all.yaml
echo "==== delete 04"        
oc delete -f 04_pass_carbon_all.yaml
echo "==== delete 05"        
oc delete -f 05_pass_doors_all.yaml
echo "==== delete 06"        
oc delete -f 06_pass_eagle_all.yaml
echo "==== delete 07"        
oc delete -f 07_pass_floor_all.yaml
echo "==== delete 08"
oc delete -f 08_pass_gonzo_all.yaml
echo "=============="
