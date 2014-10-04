package br.com.gio.gncweb.util;

import java.io.Serializable;

public abstract class Model implements Serializable {

        private static final long serialVersionUID = 1L;

        abstract public Long getId();
        
        @Override
        public int hashCode() {
                final int prime = 31;
                int result = 1;
                result = prime * result + ((getId() == null) ? 0 : getId().hashCode());
                return result;
        }
        
        @Override
        public boolean equals(Object obj) {
                if (this == obj)
                        return true;
                
                if (obj == null)
                        return false;
                
                if (getClass() != obj.getClass())
                        return false;
                
                if (!(obj instanceof Model))
                        return false;
                
                Model other = (Model) obj;
                
                if (getId() == null) {
                        if (other.getId() != null)
                                return false;
                        
                } else if (!getId().equals(other.getId()))
                        return false;
                
                return true;
        }

}