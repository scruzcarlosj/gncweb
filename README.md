gncweb
======

<h1>Security</h1>

<security-domains>
    <security-domain name="gncweb-jaas-realm">
    <authentication>
        <login-module code="Database" flag="required">
            <module-option name="dsJndiName" value="java:/gncwebDS"/>
            <module-option name="principalsQuery" value="select password as 'Password' from user where email=?"/>
            <module-option name="rolesQuery" value="select r.name as 'Role', r.name as 'RoleGroup' from role r inner join user u on (r.role_id = u.role_id) where u.name=?"/> 
        </login-module>
    </authentication>
</security-domain>
