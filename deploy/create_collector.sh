echo "==== Create 00_01"
kubectl create -f 00_01_one.yaml
echo "==== Create 00_02"            
kubectl create -f 00_02_teams.yaml
echo "==== Create 00_03"        
kubectl create -f 00_03_imagePolicy.yaml
echo "==== Create 00_04"        
kubectl create -f 00_04_instructor.yaml
echo "==== Create 00_05"        
kubectl create -f 00_05_student_ui.yaml
echo "==== Create 00_06"        
kubectl create -f 00_06_student_service.yaml    
echo "================="
