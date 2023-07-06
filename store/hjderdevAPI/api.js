import axios from "axios"
const hjderdevAPI = axios.create({
  baseURL: "https://hjder-dev-98132.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return hjderdevAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function api_v1_login_create(payload) {
  return hjderdevAPI.post(`/api/v1/login/`, payload.data)
}
function api_v1_sdyu_list(payload) {
  return hjderdevAPI.get(`/api/v1/sdyu/`)
}
function api_v1_sdyu_create(payload) {
  return hjderdevAPI.post(`/api/v1/sdyu/`, payload.data)
}
function api_v1_sdyu_retrieve(payload) {
  return hjderdevAPI.get(`/api/v1/sdyu/${payload.id}/`)
}
function api_v1_sdyu_update(payload) {
  return hjderdevAPI.put(`/api/v1/sdyu/${payload.id}/`, payload.data)
}
function api_v1_sdyu_partial_update(payload) {
  return hjderdevAPI.patch(`/api/v1/sdyu/${payload.id}/`, payload.data)
}
function api_v1_sdyu_destroy(payload) {
  return hjderdevAPI.delete(`/api/v1/sdyu/${payload.id}/`)
}
function api_v1_sgfr_list(payload) {
  return hjderdevAPI.get(`/api/v1/sgfr/`)
}
function api_v1_sgfr_create(payload) {
  return hjderdevAPI.post(`/api/v1/sgfr/`, payload.data)
}
function api_v1_sgfr_retrieve(payload) {
  return hjderdevAPI.get(`/api/v1/sgfr/${payload.id}/`)
}
function api_v1_sgfr_update(payload) {
  return hjderdevAPI.put(`/api/v1/sgfr/${payload.id}/`, payload.data)
}
function api_v1_sgfr_partial_update(payload) {
  return hjderdevAPI.patch(`/api/v1/sgfr/${payload.id}/`, payload.data)
}
function api_v1_sgfr_destroy(payload) {
  return hjderdevAPI.delete(`/api/v1/sgfr/${payload.id}/`)
}
function api_v1_signup_create(payload) {
  return hjderdevAPI.post(`/api/v1/signup/`, payload.data)
}
function rest_auth_login_create(payload) {
  return hjderdevAPI.post(`/rest-auth/login/`, payload.data)
}
function rest_auth_logout_retrieve(payload) {
  return hjderdevAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return hjderdevAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return hjderdevAPI.post(`/rest-auth/password/change/`, payload.data)
}
function rest_auth_password_reset_create(payload) {
  return hjderdevAPI.post(`/rest-auth/password/reset/`, payload.data)
}
function rest_auth_password_reset_confirm_create(payload) {
  return hjderdevAPI.post(`/rest-auth/password/reset/confirm/`, payload.data)
}
function rest_auth_registration_create(payload) {
  return hjderdevAPI.post(`/rest-auth/registration/`, payload.data)
}
function rest_auth_registration_verify_email_create(payload) {
  return hjderdevAPI.post(`/rest-auth/registration/verify-email/`, payload.data)
}
function rest_auth_user_retrieve(payload) {
  return hjderdevAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return hjderdevAPI.put(`/rest-auth/user/`, payload.data)
}
function rest_auth_user_partial_update(payload) {
  return hjderdevAPI.patch(`/rest-auth/user/`, payload.data)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_login_create,
  api_v1_sdyu_list,
  api_v1_sdyu_create,
  api_v1_sdyu_retrieve,
  api_v1_sdyu_update,
  api_v1_sdyu_partial_update,
  api_v1_sdyu_destroy,
  api_v1_sgfr_list,
  api_v1_sgfr_create,
  api_v1_sgfr_retrieve,
  api_v1_sgfr_update,
  api_v1_sgfr_partial_update,
  api_v1_sgfr_destroy,
  api_v1_signup_create,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
