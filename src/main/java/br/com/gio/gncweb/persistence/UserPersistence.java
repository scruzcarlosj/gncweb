package br.com.gio.gncweb.persistence;

import java.util.List;

import javax.enterprise.context.ApplicationScoped;
import javax.persistence.TypedQuery;

import br.com.gio.gncweb.model.User;

@ApplicationScoped
public class UserPersistence extends BasePersistence<Long, User> {
	
	public List<User> findAll(){
		return super.findAll();
	}
	
	public User findById(Long id){
		return super.findById(id);
	}
	
	public List<User> findByName(String name){
		
		StringBuilder hql = new StringBuilder();
		
		hql.append("select user from User as user ");
		hql.append("where user.name like :name ");
		
		TypedQuery<User>  query = getEntityManager().createQuery(hql.toString(), User.class);
		query.setParameter("name", name != null ? '%' + name + '%' : name);
		
		return query.getResultList();
		
		
	}
	
}
