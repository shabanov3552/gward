import webpack from "webpack-stream";
import webPackConfigWebp from '../webpack.prod.js';
import webPackConfigNoWebp from '../webpack.devprod.js';
import webPackConfigBitrix from '../webpack.bitrix.js';


export const js = () => {
	let webPackConfig = app.isWebP ? webPackConfigWebp : webPackConfigNoWebp
	if (app.isBitrix) {
		webPackConfig = webPackConfigBitrix
	}
	return app.gulp.src(app.path.src.js)
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: "JS",
				message: "Error: <%= error.message %>"
			}))
		)
		.pipe(webpack({
			config: webPackConfig
		}))
		.pipe(app.gulp.dest(app.path.build.js));
}