import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Contact} from "../../Contact/Contact";
import {Input, Textarea} from "../../../../common/Forms-control/FormsControl";

export type ProfileDataFormDataType = {
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    aboutMe: string
}

export const ProfileDataForm: React.FC<InjectedFormProps<ProfileDataFormDataType>> = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>

            <div>
                <button>Save</button>
            </div>

            <div>
                <div><b>Full name: </b></div>
                <Field placeholder="full name" name={"fullName"} component={Input}/>
                <div>
                    <b>About me: </b>
                    <Field placeholder="about me" name={"aboutMe"} component={Textarea}/>
                </div>
                <div>
                    <b>Looking job: </b>
                    <Field name={"lookingForAJob"} component={Input} type={"checkbox"}/>
                </div>
                <div>
                    <b>My skills: </b>
                    <Field placeholder="my skills" name={"lookingForAJobDescription"} component={Textarea}/>
                </div>

                {/*  <div>
                    <b>Contacts: </b>
                    {profile.contacts && Object.keys(profile.contacts).map(key => {
                        return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
                    })}
                </div>*/}
            </div>
        </form>
    );
};

export const ProfileDataReduxForm = reduxForm<ProfileDataFormDataType>({form: "profileData"})(ProfileDataForm)