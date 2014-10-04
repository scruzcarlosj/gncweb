package br.com.gio.gncweb.service;

import java.util.List;

import br.com.gio.gncweb.persistence.BasePersistence;
import br.com.gio.gncweb.util.Model;

public abstract class BaseService<T extends Model> {

	public List<T> findAll(){
		return getPersistence().findAll();
	}
	
	public T findById(Long id){
		return getPersistence().findById(id);
	}
	
	public void create(T model){
		getPersistence().save(model);
	}
	
	public void update(T model){
		getPersistence().update(model);
	}
	
	public void remove(Long id){
		T model = findById(id);
		getPersistence().remove(model);
	}
	
	public abstract BasePersistence<Long, T> getPersistence();
	
}
