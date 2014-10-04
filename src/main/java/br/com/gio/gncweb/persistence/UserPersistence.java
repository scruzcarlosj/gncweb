package br.com.gio.gncweb.persistence;

import java.util.List;

import javax.enterprise.context.ApplicationScoped;

import br.com.gio.gncweb.model.User;

@ApplicationScoped
public class UserPersistence extends BasePersistence<Long, User> {
	
	public List<User> findAll(){
		return findAll();
	}
	
	public User findById(Long id){
		return findById(id);
	}
	
}
