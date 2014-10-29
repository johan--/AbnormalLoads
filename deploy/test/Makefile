rebuild:
	bower install
	ansible-playbook -i $(ANSIBLE_HOSTS) rebuild.yml
update:
	bower install
	ansible-playbook -i $(ANSIBLE_HOSTS) update.yml
refreshdb:
	bower install
	ansible-playbook -i $(ANSIBLE_HOSTS) refreshdb.yml