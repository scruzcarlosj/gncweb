package br.com.gio.gncweb.service;

import java.util.List;

import javax.ejb.Stateless;
import javax.inject.Inject;

import br.com.gio.gncweb.model.Sector;
import br.com.gio.gncweb.persistence.BasePersistence;
import br.com.gio.gncweb.persistence.SectorPersistence;

@Stateless
public class SectorService extends BaseService<Sector> {

	@Inject
	private SectorPersistence sectorPersistence;
	
	@Override
	public BasePersistence<Long, Sector> getPersistence() {
		return sectorPersistence;
	}
	
	public List<Sector> findByName(String name){
		return sectorPersistence.findByName(name);
	}

}
