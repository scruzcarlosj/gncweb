package br.com.gio.gncweb.util;

public class Status {
	
	public static final Status SUCCESS = new Status(200, "Your request completed successfully");

	private Integer code;
	private String message;
	
	public Status(Integer code, String message) {
		super();
		this.code = code;
		this.message = message;
	}
	
	public Integer getCode() {
		return code;
	}
	public void setCode(Integer code) {
		this.code = code;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}	
}
