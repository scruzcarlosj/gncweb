package br.com.gio.gncweb.persistence;

import java.util.List;

import javax.enterprise.context.ApplicationScoped;
import javax.persistence.TypedQuery;

import br.com.gio.gncweb.model.NonConformityType;
import br.com.gio.gncweb.model.User;

@ApplicationScoped
public class NonConformityTypePersistence extends BasePersistence<Long, NonConformityType> {
	
	public List<NonConformityType> findAll(){
		return super.findAll();
	}
	
	public NonConformityType findById(Long id){
		return super.findById(id);
	}
	
	public List<NonConformityType> findByName(String name){
		
		StringBuilder hql = new StringBuilder();
		
		hql.append("select nct from NonConformityType as nct ");
		hql.append("where nct.name like :name ");
		
		TypedQuery<NonConformityType>  query = getEntityManager().createQuery(hql.toString(), NonConformityType.class);
		query.setParameter("name", name != null ? '%' + name + '%' : name);
		
		return query.getResultList();
		
		
	}
	
}
