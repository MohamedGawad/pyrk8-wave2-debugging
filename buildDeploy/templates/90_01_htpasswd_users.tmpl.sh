ssh -o StrictHostKeyChecking=no  -o UserKnownHostsFile=/dev/null -i ./sshkey root@$1 'htpasswd -b /etc/origin/master/htpasswd {{team}} {{team}}'