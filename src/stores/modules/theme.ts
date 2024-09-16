import { createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit'

interface ThemeState {
  hideConfigButton: boolean
  isPinned: boolean
  showConfig: boolean
  sidebarType: string
  isRTL: boolean
  mcolor: string
  darkMode: boolean
  isNavFixed: boolean
  isAbsolute: boolean
  showNavs: boolean
  showSidenav: boolean
  showNavbar: boolean
  showFooter: boolean
  showMain: boolean
  layout: string
  isTransparent?: string
  navbarFixedClass?: string
}

const initialState: ThemeState = {
  hideConfigButton: false,
  isPinned: true,
  showConfig: false,
  sidebarType: "bg-white",
  isRTL: false,
  mcolor: "",
  darkMode: false,
  isNavFixed: false,
  isAbsolute: false,
  showNavs: true,
  showSidenav: true,
  showNavbar: true,
  showFooter: true,
  showMain: true,
  layout: "default",
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleConfigurator(state) {
      state.showConfig = !state.showConfig;
    },
    navbarMinimize(state) {
      const sidenavShow = document.querySelector(".g-sidenav-show");

      if (sidenavShow?.classList.contains("g-sidenav-hidden")) {
        sidenavShow.classList.remove("g-sidenav-hidden");
        sidenavShow.classList.add("g-sidenav-pinned");
        state.isPinned = true;
      } else {
        sidenavShow?.classList.add("g-sidenav-hidden");
        sidenavShow?.classList.remove("g-sidenav-pinned");
        state.isPinned = false;
      }
    },
    setSidebarType(state, action: PayloadAction<string>) {
      state.sidebarType = action.payload;
    },
    toggleNavbarFixed(state) {
      if (state.isNavFixed === false) {
        state.isNavFixed = true;
      } else {
        state.isNavFixed = false;
      }
    },
    setMcolor(state, action: PayloadAction<string>) {
      state.mcolor = action.payload;
    },
    toggleDarkMode(state) {
      state.darkMode = !state.darkMode;
    },
    setShowNavbar(state, action: PayloadAction<boolean>) {
      state.showNavbar = action.payload;
    },
    setShowSidenav(state, action: PayloadAction<boolean>) {
      state.showSidenav = action.payload;
    },
    setShowFooter(state, action: PayloadAction<boolean>) {
      state.showFooter = action.payload;
    },
    setHideConfigButton(state, action: PayloadAction<boolean>) {
      state.hideConfigButton = action.payload;
    },
    setLayout(state, action: PayloadAction<string>) {
      state.layout = action.payload;
    },
    setIsPinned(state, action: PayloadAction<boolean>) {
      state.isPinned = action.payload;
    },
    setIsTransparent(state, action: PayloadAction<string>) {
      state.isTransparent = action.payload;
    },
    setRtl(state, action: PayloadAction<boolean>) {
      state.isRTL = action.payload;
    }
  }
})

export const {
  navbarMinimize,
  setHideConfigButton,
  setIsPinned,
  setIsTransparent,
  setLayout,
  setMcolor,
  setRtl,
  setShowFooter,
  setShowNavbar,
  setShowSidenav,
  setSidebarType,
  toggleConfigurator,
  toggleDarkMode,
  toggleNavbarFixed,
} = themeSlice.actions

export function toggleSidebarColor(payload: string) {
  return function(dispatch: Dispatch<PayloadAction<string>>) {
    dispatch(setSidebarType(payload))
  }
}

export default themeSlice.reducer
