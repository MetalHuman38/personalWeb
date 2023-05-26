from flask import Flask, render_template

app = Flask(__name__, static_folder='static', template_folder='Templates')


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/allArticles/a-leap-into-the-unknown')
def article_leap_into_unknown():
    return render_template('allArticles/a-leap-into-the-unknown.html')


@app.route('/allArticles/allarticles')
def all_article():
    return render_template('allArticles/allarticles.html')


@app.route('/allArticles/rewinding-time')
def rewinding_time():
    return render_template('allArticles/rewinding-time.html')


@app.route('/allArticles/rewrite-learning-curve')
def rewrite_learning_curve():
    return render_template('allArticles/rewrite-learning-curve.html')


@app.route('/portfolio')
def portfolio():
    return render_template('portfolio/index.html')


if __name__ == '__main__':
    app.run(debug=True)
