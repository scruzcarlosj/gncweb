package br.com.gio.gncweb.service;

import java.util.List;

import javax.ejb.Stateless;
import javax.inject.Inject;

import br.com.gio.gncweb.model.NonConformityType;
import br.com.gio.gncweb.persistence.BasePersistence;
import br.com.gio.gncweb.persistence.NonConformityTypePersistence;

@Stateless
public class NonConformityTypeService extends BaseService<NonConformityType> {
	
	@Inject
	private NonConformityTypePersistence persistence;
	
	
	
	public List<NonConformityType> findByName(String name){
		return persistence.findByName(name);
	}
	
	
	@Override
	public BasePersistence<Long, NonConformityType> getPersistence() {
		return persistence;
	}

	
	
}
