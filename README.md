# `nz-sider` trigger disappeared after build
Bug to reproduce
```
npm install
ng serve
```
The trigger shows as normal.
![image](https://user-images.githubusercontent.com/9740581/53484193-33470380-3abe-11e9-9391-c2057b1dcb35.png)
In the production mode the trigger disappeared.
```
ng build --prod
```
or
```
ng serve --prod
```
![image](https://user-images.githubusercontent.com/9740581/53484390-b5372c80-3abe-11e9-8874-d9f51cbf8a4b.png)
