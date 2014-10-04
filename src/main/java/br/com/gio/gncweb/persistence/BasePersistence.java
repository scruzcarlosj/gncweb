package br.com.gio.gncweb.persistence;

import java.lang.reflect.ParameterizedType;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import br.com.gio.gncweb.util.Model;

public abstract class BasePersistence<PK, T extends Model> {
	
	@PersistenceContext
	protected EntityManager em;
	
	@SuppressWarnings("unchecked")
	public List<T> findAll(){
		return em.createQuery(("FROM " + getTypeClass().getName()))
				.getResultList();
	}
	
	@SuppressWarnings("unchecked")
	public T findById(PK pk){
		return (T) em.find(getTypeClass(), pk);
	}
	
	public void persistOrMerge(T model){
		
	}
	
	public void save(T model){
		em.persist(model);
	}
	
	public void update(T model){
		em.merge(model);
	}
	
	public void remove(T model){
		em.remove(model);
	}
	
	private Class<?> getTypeClass() {
		Class<?> clazz = (Class<?>) ((ParameterizedType) this.getClass()
				.getGenericSuperclass()).getActualTypeArguments()[1];
		return clazz;
	}
	
	public EntityManager getEntityManager(){
		return em;
	}

}
