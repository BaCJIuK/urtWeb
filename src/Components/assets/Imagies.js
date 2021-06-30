

const createModule = (req) => {
	let reqArray = req.keys()
	return reqArray.map(el => req(el))
}

export const buildFiber = createModule(require.context('./../../img/buildFiber/', false, /\.jpg$/))
export const certificate = createModule(require.context('./../../img/certificate/', false, /\.jpg$/))
export const common = createModule(require.context('./../../img/common/', false, /\.jpg$/))
export const lab = createModule(require.context('./../../img/lab/', false, /\.jpg$/))
export const licenses = createModule(require.context('./../../img/licenses/', false, /\.jpg$/))
export const mobileNetwork = createModule(require.context('./../../img/mobileNetwork/', false, /\.jpg$/))
export const organizationFoto = createModule(require.context('./../../img/organizationFoto/', false, /\.jpg$/))
export const otherImage = createModule(require.context('./../../img/otherImage/', false, /\.jpg$/))
export const technic = createModule(require.context('./../../img/technic/', false, /\.jpg$/))
