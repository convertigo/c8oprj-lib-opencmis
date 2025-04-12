


# lib_OpenCIMS

# CIMS connector to Alfresco

This is the CIMS connector for Convertigo enabling to read, and put file in CIMS repositories sudh as Alfresco. The Connector relies on the Apache OpenCIMS library.




For more technical informations : [documentation](./project.md)

- [Installation](#installation)
- [Sequences](#sequences)
    - [Connect](#connect)
    - [GetFile](#getfile)
    - [PutFile](#putfile)


## Installation

1. In your Convertigo Studio click on ![](https://github.com/convertigo/convertigo/blob/develop/eclipse-plugin-studio/icons/studio/project_import.gif?raw=true "Import a project in treeview") to import a project in the treeview
2. In the import wizard

   ![](https://github.com/convertigo/convertigo/blob/develop/eclipse-plugin-studio/tomcat/webapps/convertigo/templates/ftl/project_import_wzd.png?raw=true "Import Project")
   
   paste the text below into the `Project remote URL` field:
   <table>
     <tr><td>Usage</td><td>Click the copy button at the end of the line</td></tr>
     <tr><td>To contribute</td><td>

     ```
     lib_OpenCIMS=https://github.com/convertigo/c8oprj-lib-opencims.git:branch=master
     ```
     </td></tr>
     <tr><td>To simply use</td><td>

     ```
     lib_OpenCIMS=https://github.com/convertigo/c8oprj-lib-opencims/archive/master.zip
     ```
     </td></tr>
    </table>
3. Click the `Finish` button. This will automatically import the __lib_OpenCIMS__ project


## Sequences

### Connect

Has to be called before any other Sequence. This will establish a Session between Convertigo and the Target CIMS (Alfresco). The session will be automatically held in the Convertigo Session.

**variables**

<table>
<tr>
<th>name</th><th>comment</th>
</tr>
<tr>
<td>password</td><td>Password to access the CIMS</td>
</tr>
<tr>
<td>repoID</td><td>The repository ID to access. use '-default-' for Alfresco</td>
</tr>
<tr>
<td>url</td><td>Target CIMS URL, for example use http://localhost:8080/alfresco/api/-default-/public/cmis/versions/1.1/atom for Alfresco</td>
</tr>
<tr>
<td>user</td><td>User name to acess the CIMS</td>
</tr>
</table>

### GetFile

**variables**

<table>
<tr>
<th>name</th><th>comment</th>
</tr>
<tr>
<td>docPath</td><td></td>
</tr>
</table>

### PutFile

**variables**

<table>
<tr>
<th>name</th><th>comment</th>
</tr>
<tr>
<td>filePath</td><td></td>
</tr>
<tr>
<td>folderPath</td><td></td>
</tr>
</table>



