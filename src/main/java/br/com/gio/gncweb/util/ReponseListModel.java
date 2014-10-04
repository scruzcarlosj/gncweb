package br.com.gio.gncweb.util;

import java.util.List;

public class ReponseListModel<T extends Model> extends Response <List<T>>{

	private List<T> data;

	public List<T> getData() {
		return data;
	}

	public void setData(List<T> data) {
		this.data = data;
	}
	
}
