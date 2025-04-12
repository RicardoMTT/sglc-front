import { HttpClient, HttpParams } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";



@Injectable({
  providedIn: 'root'
})
export class ApiService{
  private apiUrl = 'https://signiabd.solarc.pe/api/Modulo';
  private apiUrlProfile = 'https://signiabd.solarc.pe/api/Perfil';
  private apiUrlUser = 'https://signiabd.solarc.pe/api/Usuario';
  private apiUrlCountry = 'https://signiabd.solarc.pe/api/Paises';
  private apiUrlParameter = 'https://signiabd.solarc.pe/api/Parametros';
  private apiUrlClient = 'https://signiabd.solarc.pe/api/Clientes';

  private apiUrlProfileModule = 'https://signiabd.solarc.pe/api/PerfilModulo';

  private apiUrlCompany = 'https://signiabd.solarc.pe/api/Empresa';


  private apiUrlUbigeo = 'https://signiabd.solarc.pe/api/Ubigeo';
  private apiUrlNumerator = 'https://signiabd.solarc.pe/api/Numerador';

  private apiUrlSmtpServer = 'https://signiabd.solarc.pe/api/ServerSMTP';
  private apiUrlEmail = 'https://signiabd.solarc.pe/api/Email';

  private http = inject(HttpClient);


  getModules(){
    return this.http.post(`${this.apiUrl}/ObtenerModulos`,{});
  }

  getClients(){
    const user = JSON.parse(localStorage.getItem('user')|| '{}');

    const body = {
      empresId:user.empresa_Id
    }
    return this.http.post(`${this.apiUrlClient}/ObtenerClientes`,body);
  }


  getEmails(){

    const user = JSON.parse(localStorage.getItem('user')|| '{}');

    const body = {
      empresa_Id:user.empresa_Id
    }
    return this.http.post(`${this.apiUrlEmail}/ObtenerEmail`,body);
  }


  createEmail(body:any){
    return this.http.post(`${this.apiUrlEmail}/InsertarEmail`,body);
  }


  updateEmail(body:any){
    return this.http.post(`${this.apiUrlEmail}/ActualizarEmail`,body);
  }

  store(data:any){
    return this.http.post(`${this.apiUrl}/InsertarModulo`,data);
  }

  getParentModules(){
    return this.http.post(`${this.apiUrl}/ObtenerModuloPadre`,{});
  }

  updateModule(data:any){
    return this.http.post(`${this.apiUrl}/ActualizarModulo`,data);
  }

  deleteModule(data:any){
    console.log('data',data);

    const body = {
      module_id:data.modulo_id
    }
    return this.http.post(`${this.apiUrl}/EliminarModulo`,body);
  }

  getAllProfile(){
    const body = {
      empresa_id:1
    }
    return this.http.post(`${this.apiUrlProfile}/ObtenerPerfil`,body);
  }

  createProfile(data:any){
    return this.http.post(`${this.apiUrlProfile}/InsertarPerfil`,data);
  }


  updateProfile(data:any){
    return this.http.post(`${this.apiUrlProfile}/ActualizarPerfil`,data);
  }

  deleteProfile(item:any){
    const body = {
      idPerfil:item.perfiL_ID
    }
    return this.http.post(`${this.apiUrlProfile}/EliminarPerfil`,body);
  }

  getAllUsers(){

    const user = JSON.parse(localStorage.getItem('user')|| '{}');

    const body = {
      idEmpresa:user.empresa_Id
    }
    return this.http.post(`${this.apiUrlUser}/Obtener_Usuarios`,body);
  }

  createUser(data:any){
    return this.http.post(`${this.apiUrlUser}/Insertar_Usuario`,data);
  }


  updateUser(data:any){
    return this.http.post(`${this.apiUrlProfile}/ActualizarPerfil`,data);
  }

  deleteUser(item:any){
    const body = {
      idUsuario:item.usuario_Id
    }
    return this.http.post(`${this.apiUrlProfile}/Eliminar_Usuario`,body);
  }

  getAllCountries(){
    const body = {
    }
    return this.http.post(`${this.apiUrlCountry}/ListarPaises`,body);
  }


  getAllProfileModule(){
    const user = JSON.parse(localStorage.getItem('user')|| '{}');

    const body = {
      perfil_Id: user.perfil_Id
    }

    return this.http.post(`${this.apiUrlProfileModule}/ObtenerPerfilModulos`,body);
  }


  createProfileModule(data:any){
    return this.http.post(`${this.apiUrlProfileModule}/InsertarPerfilModulo`,data);
  }


  deleteProfileModule(data:any){
    console.log(data);

    const body = {
      perfilModuloId: data.perfil_Id
    }
    return this.http.post(`${this.apiUrlProfileModule}/ELiminarPerfilModulo`,data);
  }



  getAllParameters(){
    return this.http.post(`${this.apiUrlParameter}/LeerParametro`,{});
  }



  updateParameter(data:any){
    return this.http.post(`${this.apiUrlParameter}/ActualizarParametro`,data);
  }


  getAllCompanies(){
    return this.http.post(`${this.apiUrlCompany}/ObtenerEmpresas`,{});
  }

  updateCompany(data:any){
    return this.http.post(`${this.apiUrlCompany}/ActualizarEmpresa`,data);
  }


  getAllUbigeo(){
    return this.http.post(`${this.apiUrlUbigeo}/ListarUbigeo`,{});
  }


  getAllSmtp(){
    const user = JSON.parse(localStorage.getItem('user')|| '{}');
    const body = {
      empresaId: user.empresa_Id
    }
    return this.http.post(`${this.apiUrlSmtpServer}/ObtenerSMTP`,body);
  }


  updateSmtp(body:any){
    return this.http.post(`${this.apiUrlSmtpServer}/ActualizarSMTP`,body);
  }


  getAllNotifications(){
    const user = JSON.parse(localStorage.getItem('user')|| '{}');
    const body = {
      empresaId: user.empresa_Id
    }
    return this.http.post(`${this.apiUrlSmtpServer}/ObtenerNotificacion`,body);
  }


  getAllActivitiesCalendar(){
    const user = JSON.parse(localStorage.getItem('user')|| '{}');
    const body = {
      empresaId: user.empresa_Id
    }
    return this.http.post(`${this.apiUrlSmtpServer}/ObtenerCalendario`,body);
  }


  createServerSMTP(data:any){
    return this.http.post(`${this.apiUrlSmtpServer}/InsertarSMTP`,data);
  }


  getAllAudit(){
    const user = JSON.parse(localStorage.getItem('user')|| '{}');
    const body = {
      empresaId: user.empresa_Id
    }
    return this.http.post(`${this.apiUrlSmtpServer}/ObtenerAuditoria`,body);
  }


  getAllNumerator(){
    const user = JSON.parse(localStorage.getItem('user')|| '{}');
    const body = {
      id_Empresa: user.empresa_Id
    }
    return this.http.post(`${this.apiUrlNumerator}/ObtenerNumerador`,body);
  }

  updateNumerator(data:any){
    return this.http.post(`${this.apiUrlNumerator}/UpdateNmerador`,data);
  }

  insertProfileModule(data:any){
    return this.http.post(`${this.apiUrlProfileModule}/InsertarPerfilModulo`,data);
  }

  ObtenerArbolPerfilModulos(body:any){

    return this.http.post(`${this.apiUrlProfileModule}/ObtenerArbolPerfilModulos`,body);

  }


  ObtenerUbigeosCombo(deparment:string,province:string,district:string,codeProvince:string,codeDistrict:string){

    const body = {
      "departamento": deparment,
      "provincia": province,
      "distrito": district,
      "codProvincia": codeProvince,
      "codDistrito": codeDistrict
    }

    return this.http.post(`${this.apiUrlUbigeo}/ObtenerUbigeosCombo`,body);

  }
}
