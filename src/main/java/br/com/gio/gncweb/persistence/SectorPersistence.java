package br.com.gio.gncweb.persistence;

import java.util.List;

import javax.enterprise.context.ApplicationScoped;
import javax.persistence.TypedQuery;

import br.com.gio.gncweb.model.Sector;

@ApplicationScoped
public class SectorPersistence extends BasePersistence<Long, Sector> {

	
	public List<Sector> findByName(String name){
		StringBuilder sb = new StringBuilder();
		sb.append("select sector from Sector sector ");
		sb.append("where sector.name = :name ");
		sb.append("order by sector.name ");
		
		TypedQuery<Sector> query = getEntityManager().createQuery(sb.toString(), Sector.class);
		query.setParameter("name", name);
		
		return query.getResultList();
	}
	
}
