echo "==== 00_01 ===="
kubectl delete -f 00_01_one.yaml
echo "==== 00_02 ===="            
kubectl delete -f 00_02_teams.yaml
echo "==== 00_03 ===="        
kubectl delete -f 00_03_imagePolicy.yaml
echo "==== 00_04 ===="        
kubectl delete -f 00_04_instructor.yaml
echo "==== 00_05 ===="        
kubectl delete -f 00_05_student_ui.yaml
echo "==== 00_06 ===="        
kubectl delete -f 00_06_student_service.yaml    
echo "==============="
