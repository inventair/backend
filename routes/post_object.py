from flask import  render_template,url_for,redirect,flash,request,jsonify


@app.route("/Overview")
@app.route("/")
def overview():
    balance = Balance.query.all()
    exists = bool(Balance.query.all())
    if exists== False :
        flash(f'Add products,locations and make transfers to view','info')
    return render_template('overview.html' ,balance=balance)