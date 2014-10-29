rebuild:
	cd ../../; bower install
	ansible-playbook -i $(ANSIBLE_HOSTS) rebuild.yml --ask-pass
update:
	cd ../../; bower install
	ansible-playbook -i $(ANSIBLE_HOSTS) update.yml
refreshdb:
	cd ../../; bower install
	ansible-playbook -i $(ANSIBLE_HOSTS) refreshdb.yml
