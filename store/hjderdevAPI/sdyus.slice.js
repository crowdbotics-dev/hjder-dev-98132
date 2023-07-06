import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_sdyu_list = createAsyncThunk(
  "sdyus/api_v1_sdyu_list",
  async payload => {
    const response = await apiService.api_v1_sdyu_list(payload)
    return response.data
  }
)
export const api_v1_sdyu_create = createAsyncThunk(
  "sdyus/api_v1_sdyu_create",
  async payload => {
    const response = await apiService.api_v1_sdyu_create(payload)
    return response.data
  }
)
export const api_v1_sdyu_retrieve = createAsyncThunk(
  "sdyus/api_v1_sdyu_retrieve",
  async payload => {
    const response = await apiService.api_v1_sdyu_retrieve(payload)
    return response.data
  }
)
export const api_v1_sdyu_update = createAsyncThunk(
  "sdyus/api_v1_sdyu_update",
  async payload => {
    const response = await apiService.api_v1_sdyu_update(payload)
    return response.data
  }
)
export const api_v1_sdyu_partial_update = createAsyncThunk(
  "sdyus/api_v1_sdyu_partial_update",
  async payload => {
    const response = await apiService.api_v1_sdyu_partial_update(payload)
    return response.data
  }
)
export const api_v1_sdyu_destroy = createAsyncThunk(
  "sdyus/api_v1_sdyu_destroy",
  async payload => {
    const response = await apiService.api_v1_sdyu_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const sdyusSlice = createSlice({
  name: "sdyus",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_sdyu_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_sdyu_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_sdyu_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_sdyu_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_sdyu_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_sdyu_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_sdyu_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_sdyu_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_sdyu_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_sdyu_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_sdyu_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_sdyu_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_sdyu_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_sdyu_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_sdyu_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_sdyu_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_sdyu_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_sdyu_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_sdyu_list,
  api_v1_sdyu_create,
  api_v1_sdyu_retrieve,
  api_v1_sdyu_update,
  api_v1_sdyu_partial_update,
  api_v1_sdyu_destroy,
  slice: sdyusSlice
}
