package br.com.gio.gncweb.service;

import java.util.List;

import javax.ejb.Stateless;
import javax.inject.Inject;

import br.com.gio.gncweb.model.User;
import br.com.gio.gncweb.persistence.BasePersistence;
import br.com.gio.gncweb.persistence.UserPersistence;

@Stateless
public class UserService extends BaseService<User> {
	
	@Inject
	private UserPersistence persistence;
	
	
	
	public List<User> findByName(String name){
		return persistence.findByName(name);
	}
	
	
	@Override
	public BasePersistence<Long, User> getPersistence() {
		return persistence;
	}

	
	
}
