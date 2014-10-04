package br.com.gio.gncweb.service;

import javax.ejb.Stateless;
import javax.inject.Inject;

import br.com.gio.gncweb.model.User;
import br.com.gio.gncweb.persistence.BasePersistence;
import br.com.gio.gncweb.persistence.UserPersistence;

@Stateless
public class UserService extends BaseService<User> {
	
	@Inject
	private UserPersistence persistence;

	@Override
	public BasePersistence<Long, User> getPersistence() {
		return persistence;
	}

	
	
}
