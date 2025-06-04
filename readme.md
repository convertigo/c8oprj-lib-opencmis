


# lib_OpenCMIS

# CMIS connector to Alfresco

This is the CMIS connector for Convertigo enabling to read, and put file in CMIS repositories such as Alfresco. The Connector relies on the Apache OpenCMIS library.



For more technical informations : [documentation](./project.md)

- [Installation](#installation)
- [Sequences](#sequences)
    - [CheckConnect](#checkconnect)
    - [Connect](#connect)
    - [GetFile](#getfile)
    - [PersonalFiles](#personalfiles)
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
     lib_OpenCMIS=https://github.com/convertigo/c8oprj-lib-opencmis.git:branch=master
     ```
     </td></tr>
     <tr><td>To simply use</td><td>

     ```
     lib_OpenCMIS=https://github.com/convertigo/c8oprj-lib-opencmis/archive/master.zip
     ```
     </td></tr>
    </table>
3. Click the `Finish` button. This will automatically import the __lib_OpenCMIS__ project


## Sequences

### CheckConnect

Check if the CMIS session is still alive.

Will return isConnected true/false and the session name if available.

### Connect

Has to be called before any other Sequence. This will establish a Session between Convertigo and the Target CMIS (Alfresco). The session will be automatically held in the Convertigo Session.

Will return the list of folders of the users root Directory with folder name, id and folder path.



**variables**

<table>
<tr>
<th>name</th><th>comment</th>
</tr>
<tr>
<td>bindingType</td><td>Protocol used to communicate with a CMIS repository. By default, auto-detected with the url. Allowed values : AtomPub, Browser, auto.</td>
</tr>
<tr>
<td>password</td><td>Password to access the CMIS</td>
</tr>
<tr>
<td>repoID</td><td>The repository ID to access. use '-default-' for Alfresco</td>
</tr>
<tr>
<td>session_parameters</td><td>The parameters added to the session creation. In the array, add a string formated like this : "key;value"</td>
</tr>
<tr>
<td>url</td><td>Target CMIS URL, for example use http://localhost:8080/alfresco/api/-default-/public/cmis/versions/1.1/atom for Alfresco</td>
</tr>
<tr>
<td>user</td><td>User name to acess the CMIS</td>
</tr>
</table>

### GetFile

Gets a file from CMIS repository. The file will be retrieved and saved in a temp directory. When you finish using this file you should delete it. The sequence will return the full path of the output file.


**variables**

<table>
<tr>
<th>name</th><th>comment</th>
</tr>
<tr>
<td>docPath</td><td>CMIS Path of the file to retrieve. For example '/MyFolder/Myfile.doc'</td>
</tr>
</table>

### PersonalFiles

Get user Personal Files folders from root folder.

### PutFile

Puts a file in a CMIS repository. The Sequence will return the folder where the file has been placed.


**variables**

<table>
<tr>
<th>name</th><th>comment</th>
</tr>
<tr>
<td>fileNames</td><td>File names of the files to upload to CMIS. If none is provided, it will use the default file names from filePaths variable.</td>
</tr>
<tr>
<td>filePaths</td><td>Full Paths of the files to upload to CMIS. </td>
</tr>
<tr>
<td>folderID</td><td>Target ID in the CMIS. For example '16cfc56d-eb6c-4420-8fc5-6deb6c0420c5'</td>
</tr>
<tr>
<td>folderPath</td><td>Target path in the CMIS. For example '/MyFolder'</td>
</tr>
</table>



