import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchDashboardStats } from '../../services/adminService';

export const getDashboardStats = createAsyncThunk('dashboard/stats', async (_, { rejectWithValue }) => {
  try {
    const { data } = await fetchDashboardStats();
    return data.data;
  } catch (error) {
    return rejectWithValue(error?.response?.data?.message || 'Failed to load dashboard');
  }
});

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: { stats: null, loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDashboardStats.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getDashboardStats.fulfilled, (state, action) => {
        state.loading = false;
        state.stats = action.payload;
      })
      .addCase(getDashboardStats.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default dashboardSlice.reducer;
